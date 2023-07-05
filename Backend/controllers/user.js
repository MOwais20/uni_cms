var jwt = require("jsonwebtoken");
const db = require("../models");
const config = require("../config/auth.config");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getIdByToken = async (token) => {
  const decoded = jwt.verify(token, config.secret);
  var userId = decoded.id;
  return userId;
};

exports.getUser = async (req, res) => {
  try {
    const TOKEN = req.headers["x-access-token"];
    const UserId = await this.getIdByToken(TOKEN);

    if (UserId) {
      await db.users
        .findOne({
          where: {
            id: UserId,
          },
          include: [db.roles],
          attributes: { exclude: ["password"] },
        })
        .then(async (response) => {
          await res.send({
            message: "User fetched successfully!",
            data: response,
          });
        });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
