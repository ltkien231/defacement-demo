import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "abc",
  database: process.env.DB_NAME || "university_db",
  ssl:
    process.env.ENV === "production"
      ? {
          rejectUnauthorized: true,
        }
      : undefined,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
