const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('orders', {
    id_orders: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    ID_User: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false
  },
    payment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    concept: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Total: {
      type: DataTypes.FLOAT,
      allowNull: false
  },
    paid:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
  }, {
    timestamps: true
  });
};
