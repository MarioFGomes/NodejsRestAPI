const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Adriano',
        email: 'adriano@example.com',
        password: bcrypt.hashSync('adriano123456', salt),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Milton',
        email: 'Milton@example.com',
        password: bcrypt.hashSync('Milton123456', salt),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Silvio',
        email: 'Silvio@example.com',
        password: bcrypt.hashSync('Silvio123456', salt),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) { },
};
