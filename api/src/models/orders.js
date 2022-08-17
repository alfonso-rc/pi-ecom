const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('orders', {
    id_orders: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    date: {
      type: DataTypes.DATE,
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
    paid:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    address:{
        type: DataTypes.TEXT,
        allowNull:false
    }
  }, {
    timestamps: false
  });
};
