'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Room extends Model {}
    Room.init(
        {
            roomName: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isLongEnough: (val) => {
                        if (val.length > 250 || val.length < 3) {
                            throw new Error('Please choose a longer room name');
                        }
                    },
                },
            },
            capacity: {
                type: DataTypes.INTEGER,
                validate: {
                    isLongEnough: (val) => {
                        if (val.length > 1 || val.length < 50) {
                            throw new Error('Invalid capacity');
                        }
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'room',
        }
    );
    return Room;
};