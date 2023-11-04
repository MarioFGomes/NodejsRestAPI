require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DataBase_Host,
  port: process.env.DataBasePorts,
  username: process.env.DataBaseUsername,
  password: process.env.DataBasePassword,
  database: process.env.DataBase,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
