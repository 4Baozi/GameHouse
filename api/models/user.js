'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //   // define association here
        // }
    }
    User.init(
        {
            firstName: { type: DataTypes.STRING },
            lastName: { type: DataTypes.STRING },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            password: { type: DataTypes.STRING },
        },
        {
            sequelize,
            modelName: 'User',
        }
    );

    User.associate = function (models) {
        // User.hasMany(models.Message);
        // Message.belongsTo(models.User, {
        //     // this table belongs to this model
        //     foreignKey: {
        //         name: 'userid',
        //         allowNull: false,
        //     },
        // });
    };
    return User;
};
