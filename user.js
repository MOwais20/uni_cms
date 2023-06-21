module.exports = (sql, Sequelize) => {
  const User = sql.define(
    "user",
    {
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      meta_data: {
        type: Sequelize.JSON,
      },
    },
    {
      paranoid: true,
    }
  );
  return User;
};
