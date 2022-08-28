const { contacts } = require('../../../database/models');

module.exports = async () => {
  const dbContacts = await contacts.findAll();
  return dbContacts;
};