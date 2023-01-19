'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "PostId", {
      type: Sequelize.UUID,
      references: {
        model: "Posts",
        key: "id"
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "PostId")
  }
};
