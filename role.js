module.exports = (sql, Sequelize) => {
  const Role = sql.define("role", {
    name: {
      type: Sequelize.STRING,
    },
  });
  return Role;
};
