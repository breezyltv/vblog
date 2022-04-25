const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");
const { initRoleData, initAdminUserData } = require("./seedData/initData");

const config = require("./config")[process.env.NODE_ENV || "dev"];
const log = config.log()

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const Role = db.role;
const User = db.user;
db.sequelize.sync({force: true}).then(()=>{
  log.info('Drop and Resync Db...')
  initialRole() 
  initialUser()
})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to JWT Node Postgres app." });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  log.info(`Server is running on http://localhost:${PORT}`)
});

function initialRole() {
  initRoleData.forEach((role)=>{
      Role.create(role);
  })
}
function initialUser() {
  User.create(initAdminUserData).then(user => {
      const roleId = [3];
      user.setRoles(roleId).then(() => {
           log.info("Admin was initalized successfully!")
      });
  })

}