const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('usuario', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    address:{
      type: DataTypes.STRING,
      allowNull:false
    },
    mail:{
      type: DataTypes.STRING,
      allowNull:false
    },
    userName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
    admin:{
      type: DataTypes.STRING,
      allowNull:false
    },
  });
};