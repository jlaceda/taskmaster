"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "Mow the lawn",
          description:
            "- take out the lawnmower\n- mow the lawn\n-take in the lawnmower",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Mow the lawn again!",
          description: "do it next week.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Task", null, {});
  }
};