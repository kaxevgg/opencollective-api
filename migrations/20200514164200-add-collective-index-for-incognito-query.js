'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Enhance User.prototype.getIncognitoProfile() performance
    await queryInterface.sequelize.query(`
      CREATE INDEX IF NOT EXISTS collectives_incognito_query ON "public"."Collectives"("CreatedByUserId","isIncognito");
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('Collectives', 'collectives_incognito_query');
  },
};
