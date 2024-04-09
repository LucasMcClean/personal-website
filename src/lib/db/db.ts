import { Client } from "pg";

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "db",
});

client
  .connect()
  .then(() => console.log("Connnected to database"))
  .catch((err) => console.log("Error connecting to database: ", err));
