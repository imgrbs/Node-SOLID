import knex from 'knex'
import dotenv from 'dotenv';

dotenv.config();

const knexConfig = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
}

export default knex(knexConfig)