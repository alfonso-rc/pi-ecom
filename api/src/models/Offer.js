const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('offer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    porcent: {
      type: DataTypes.INTEGER,
    },
    validity: {
        type: DataTypes.BOOLEAN,
      },
    expiration: {
        type: DataTypes.DATEONLY,
      },
  }, {
    timestamps: true
  });
};