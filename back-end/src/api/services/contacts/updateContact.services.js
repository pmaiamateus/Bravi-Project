const { contacts } = require('../../../database/models');
const { contactNotExist } = require('../../utils/dictionary/messageError')
const { notFound } = require('../../utils/dictionary/statusCode')
const errorHandlerUtils = require('../../utils/function/errorHandlerUtils')

module.exports = async (info) => {
  const { nome,
    email,
    telefone,
    whatsapp } = info;
  const contactExists = await contacts.findOne({
    where: { nome: nome }
  })
  if (!contactExists) throw errorHandlerUtils(notFound, contactNotExist);
  const modelResponse = await contacts.update(
    {
      email: email,
      telefone: telefone,
      whatsapp: whatsapp,
    },
    {
      where: { nome: nome },
    },
  );
  return modelResponse.message;
};