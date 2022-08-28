const { contacts } = require('../../../database/models');
const { contactRegistered } = require('../../utils/dictionary/messageError')
const { conflict } = require('../../utils/dictionary/statusCode')
const errorHandlerUtils = require('../../utils/function/errorHandlerUtils')

module.exports = async (info) => {
  const { nome,
    email,
    telefone,
    whatsapp } = info;
  if (nome) {
    const contactExists = await contacts.findOne({ where: { nome } })
    if (contactExists) throw errorHandlerUtils(conflict, contactRegistered);
  }
  const userData = await contacts.create({
      nome,
      email,
      telefone,
      whatsapp,
    });
  return userData;
};