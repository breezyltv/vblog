const  bcrypt = require("bcryptjs");

const initRoleData = [
   {
    id: 1,
    name: "user"
  },
  {
    id: 2,
    name: "moderator"
  },
  {
    id: 3,
    name: "admin",
  }
]


const initAdminUserData = {
   username: "admin",
   email: "admin@jwt.com",
   password: bcrypt.hashSync("admin", 8)
}

exports.initRoleData = initRoleData;
exports.initAdminUserData = initAdminUserData;
