const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("shopping", {
        idUser: {
            type: DataTypes.UUID
        },
        infoArticle: {
            type: DataTypes.JSON
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
    }, {
        timestamps: true
    });
};
