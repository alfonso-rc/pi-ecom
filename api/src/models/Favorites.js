const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('favorites', {
    texto: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
        timestamps: false
    });
};