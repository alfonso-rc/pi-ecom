const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('subscribers', {
      nombre: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true
      },
      email: {
         type: DataTypes.TEXT,
         allowNull: false
      }
   }, {
      timestamps: true
   });
};