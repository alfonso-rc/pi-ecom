const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("session", {
        user: {
            type: DataTypes.JSON
        }
    }, {
        timestamps: false
    });
};
