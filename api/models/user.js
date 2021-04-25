'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init(
        {
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    isLongEnough: (val) => {
                        if (val.length < 3)
                            throw new Error(
                                'Username requires a minimum of 3 characters'
                            );
                    },
                    notEmpty: true,
                },
            },
        },
        {
            sequelize,
            modelName: 'user',
        }
    );

    User.associate = models = {
        // associations defined here
    };

    // User.beforeSave((user, options) => {
    // });

    return User;
};
