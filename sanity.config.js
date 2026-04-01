const { schemaTypes } = require('./sanity/schemaTypes');

module.exports = {
  name: 'web-acb6-multi',
  title: 'ACB6 Content Studio',
  projectId: process.env.SANITY_PROJECT_ID || '4zd6lvcv',
  dataset: process.env.SANITY_DATASET || 'production',
  schema: {
    types: schemaTypes,
  },
};
