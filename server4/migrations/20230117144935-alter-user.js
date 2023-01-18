'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.addColumn("Users", "createdAt", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }, { transaction })

      await queryInterface.addColumn("Users", "updatedAt", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }, { transaction })

      await transaction.commit()

    } catch (error) {
      await transaction.rollback()
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn('Users', "createdAt", { transaction })
      await queryInterface.removeColumn('Users', "updatedAt", { transaction })
      await transaction.commit()

    } catch (error) {
      await transaction.rollback()
    }
  }
};
