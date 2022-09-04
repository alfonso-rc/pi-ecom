const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('subscribers', {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.TEXT,
         allowNull: false,
         primaryKey: true,
      }
   }, {
      timestamps: true
   });
};