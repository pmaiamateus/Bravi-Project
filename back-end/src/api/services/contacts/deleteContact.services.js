const { contacts } = require('../../../database/models');

module.exports = async (nome) => {
  const deleteContact = contacts.destroy({
    where: { nome }
  });
  return deleteContact;
};