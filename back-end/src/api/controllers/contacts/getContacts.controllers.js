const { getAllContactsService } = require('../../services/contacts');
const { success } = require('../../utils/dictionary/statusCode');

module.exports = async (_req, res, next) => {
  try {
    const dbContacts = await getAllContactsService();
    res.status(success).json(dbContacts);
  } catch (error) {
    console.log('getAllContactsService', error.message);
    next(error);
  }
};