module.exports = {
  host: "localhost",
  username: "vult",
  password: "admin",
  database: "vblog",
  dialect: "postgres",
  port: "5432",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};