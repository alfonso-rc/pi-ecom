const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('articulos', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
    },
    image: {
        type: DataTypes.ARRAY(STRING),
    },
    video: {
        type: DataTypes.STRING,
    },
    feature_bullets: {
        type: DataTypes.TEXT,
    },
    marca: {
        type: DataTypes.STRING,
    },
    modelo: {
        type: DataTypes.STRING,
    },
    SO: {
        type: DataTypes.STRING,
    },
    CPU: {
        type: DataTypes.STRING,
    },
    Ram: {
        type: DataTypes.STRING,
    },
    pantalla: {
        type: DataTypes.STRING,
    },
    huella: {
        type: DataTypes.STRING,
    },
    dimensiones: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    conectividad: {
        type: DataTypes.STRING,
    }
  },{timestamps:false}
  );
};
