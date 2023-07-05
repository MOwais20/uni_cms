module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    metadata: {
      type: DataTypes.JSON,
    },
  });

  User.associate = function (models) {
    User.belongsToMany(models.roles, {
      through: "user_roles",
    });
  };

  return User;
};
