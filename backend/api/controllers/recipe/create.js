module.exports = {


  friendlyName: 'Create',


  description: 'Create recipe.',


  inputs: {
    displayName: {
      required: true,
      type: 'string',
      description: 'The publicly visible name of the recipe.'
    },
  },


  exits: {
    success: {
      description: 'New recipe created successfully.',
    },

    invalid: {
      responseType: 'badRequest',
      description: 'Missing required information about recipe.',
    },
  },


  fn: async function ({ displayName }) {
    await Recipe.create({
      displayName,
    }).fetch();
    // All done.
    return;
  }
};
