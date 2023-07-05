const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: [
    "http://localhost:8081",
    "http://localhost:3000",
    "http://localhost:3004",
  ],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.roles;

// Production
db.sequelize.sync();

// Development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   initial();
// });

function initial() {
  Role.create({
    id: 1,
    name: "Admin",
  });
  Role.create({
    id: 2,
    name: "Faculty",
  });

  Role.create({
    id: 3,
    name: "Finance",
  });
  Role.create({
    id: 4,
    name: "Parent",
  });
  Role.create({
    id: 5,
    name: "Student",
  });
}

app.get("/", (req, res) => {
  res.json({ message: "You're in the Backyard of SHU CMS" });
});

// routes
require("./routes/auth")(app);
require("./routes/user")(app, db);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
