const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userType: {
      type: DataTypes.ENUM('1', '2'), // 1-> USUARIO NORMAL | 2-> ADMIN
      defaultValue: '1'
    }
  }, {
    timestamps: false
  });
};