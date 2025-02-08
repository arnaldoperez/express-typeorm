const { DataSource } = require("typeorm");
require("dotenv").config();

const Tasks=require("./entities/tasks.js")


const connection = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Tasks]
});

module.exports= connection
