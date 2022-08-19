const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('cards', {
    texto: {
        type: DataTypes.STRING,
        defaultValue: false,
    }
}, {
        timestamps: false
    });
};