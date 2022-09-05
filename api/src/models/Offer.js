const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('offer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    porcent: {
      type: DataTypes.FLOAT,
    },
    validity: {
        type: DataTypes.DATE,
      },
    coins: {
        type: DataTypes.INTEGER,
    },
  }, {
    timestamps: true
  });
};