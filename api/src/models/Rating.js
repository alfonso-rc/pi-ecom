const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('rating', {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    });
};