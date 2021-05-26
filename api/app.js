const express = require("express");
const http = require("http");
const path = require("path");
const morgan = require("morgan");
const db = require("./models");
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use("/api", require("./controllers"));

// for production use, we serve the static react build folder
// development environment - developing locally : will display full debug information
// production environment - will NOT display any debug information

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

    // all unknown routes should be handed to our react app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

// start up the server
if (PORT) {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
    console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====");
}

const users = {};
let players = [];
let positions = [];

io.on("connection", (socket) => {
    console.log("User: ", socket.id, "has joined");
    if (!users[socket.id]) {
        users[socket.id] = socket.id;
    }
    socket.emit("yourID", socket.id);
    io.sockets.emit("allUsers", users);

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("hey", {
            signal: data.signalData,
            from: data.from,
        });
    });

    socket.on("acceptCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
    });

    socket.on("join server", (username) => {
        const user = {
            username,
            id: socket.id,
            position: [0, 0, 0],
        };
        positions.push({
            username,
            id: socket.id,
            position: [0, 0, 0],
            rotation: [0],
        });
        players.push(user);
        io.emit("new user", players);
        io.emit("new position", positions);
    });

    socket.on("new position", (socketUser) => {
        positions.map((user) => {
            if (user.id === socketUser.id) {
                user.position = socketUser.position;
                user.rotation = socketUser.rotation;
            }
        });
        io.emit("update user", positions);
    });

    socket.on("disconnect", () => {
        delete users[socket.id];
        players = players.filter((user) => user.id !== socket.id);
        positions = positions.filter((user) => user.id !== socket.id);
        io.emit("new user", users);
        io.emit("new position", positions);
    });
});

server.listen(8080, () => console.log("server is running on port 8080"));
