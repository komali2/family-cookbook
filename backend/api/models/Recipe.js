/**
 * Recipe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    displayName: {
      type: 'string',
      required: true,
      example: 'Mamas puddin',
    },
  },

};
