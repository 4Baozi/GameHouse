
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="" alt="Logo">
  </a>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project ✨♻️

Have you ever had a virtual event where you don’t know if the attendees are engaged? Maybe they’re quiet or shy? Or, are you trying to host a virtual gathering but want to add some spice to your event to engage the audience? Well, we got the solution for you! 👍

GameHouse is a web app that connects people based on their interests in a 3d game environment.
Our project includes rooms for people to come together and communicate with each other via chat or voice while also interacting with each other virtually!
Check out our web app and enjoy your hangout! 

# Technical Backbone🖥️🌿



Some of the completed user stories are:

- Allow multiple users to join the same room.
- Allow users to communicate through an online chat feature.
- Allow users to communicate through voice chat.


## Screenshots of the web app


## Deployed at: https://tetraa.netlify.app

## Built With 💻☀️

- [React](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [WebRTC](https://www.javascript.com/)
- [Socket.io](https://www.javascript.com/)
<!-- GETTING STARTED -->

## Getting Started

This section will work you through how you can get started with the project.

### Installation

1. You will need NodeJS, Yarn, Web3.js and Truffle.js for this project.
2. Clone the repo
   ```sh
   git clone https://github.com/APiligrim/Tetra.git
   ```
3. CD into the project directory
   ```sh
   cd Tetra
   ```
4. CD into web folder
   ```sh
   cd web
   ```
5. Install yarn packages
   ```sh
   yarn install
   ```
6. Start the Server
   ```sh
   yarn start
   ```
7. For the backend server
   ```sh
   cd ../server
   ```
8. Install yarn packages
   ```sh
   yarn install
   ```
9. Start the Server
   ```sh
   yarn start
   ```
   <!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contributors

1. Josh Improgo - [github](https://github.com/orgs/4Baozi/people/josh-improgo)
2. Jonas Improgo - [github](https://github.com/orgs/4Baozi/people/josh-improgo)
3. Anastasiya Uraleva - [github](https://github.com/APiligrim)
4. Kristy - [github](https://github.com/kl408)


<!-- SCREENSHOTS -->

## Screenshots






# Project Starter
A starter repo for building CUNY Tech Prep projects with React, Express.js, and Sequelize.js

Test
Test 2
## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router

*Project Structure*

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   ├── index.js
│   │   └── posts.js
│   └── <strong>models</strong>
│       ├── index.js
│       └── post.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── <strong>components</strong>
│       │   ├── Loading.js
│       │   └── Post.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── <strong>pages</strong>
│       │   ├── AboutUsPage.js
│       │   ├── PostFormPage.js
│       │   ├── PostsListPage.js
│       │   └── ShowPostPage.js
│       └── serviceWorker.js
├── package-lock.json
└── package.json
</pre>


## Dev Setup

Each team member will need to do this on their local machine.

### Create a postgres db

Create a user in postgres named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user app2019_development
```

> You will create a DB for each project you start based on this repo. For other projects change `app2019_development` to the new apps database name.

*For more details see this [installing postgres guide](https://github.com/CUNYTechPrep/ctp2019/blob/master/guides/installing-postgresql.md)*

### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

*Clone* this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.

## Deployment

### Setting up Heroku

Install the heroku cli if you don't already have it.

> You will also need a heroku account
> And this will only be done once on your machine

```bash
# on mac
brew install heroku/brew/heroku
heroku login
```

### Create a Heroku project

Next, `cd` into this project directory and create a project:

```bash
heroku create cool-appname
heroku addons:create heroku-postgresql:hobby-dev
```

> This will deploy your apps to https://cool-appname.herokuapp.com, assuming that it is not taken already.

> You only need to do this once per app

### Deploying the app

Whenever you want to update the app run this command.

```bash
git push heroku main
```

> This command deploys your main branch. You can change that and deploy a different branch such as: `git push heroku development`
