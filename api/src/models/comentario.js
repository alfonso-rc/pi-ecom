const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('comentario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};