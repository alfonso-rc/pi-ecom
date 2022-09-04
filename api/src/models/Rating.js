const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('rating', {
        score: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
        }
    }, {
        timestamps: true
    });
};