import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

// Instantiate new Sequelize instance!
// export const sequelize = new Sequelize({
//   "username": c.username,
//   "password": c.password,
//   "database": c.database,
//   "host":     c.host,

//   dialect: 'postgres',
//   storage: ':memory:',
// });

export const sequelize = new Sequelize({
  "username": `${DB_1_USERNAME}`,
  "password": `${DB_1_PASSWORD}`,
  "database": `${DB_1_DB}`,
  "host":     `{DB_1_HOST}`,

  dialect: 'postgres',
  storage: ':memory:',
});

