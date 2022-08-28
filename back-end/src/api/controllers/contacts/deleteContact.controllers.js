const { deleteContactService } = require('../../services/contacts');
const { success } = require('../../utils/dictionary/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { nome } = req.body;
    const deleted = await deleteContactService(nome);
    return res.status(success).json(deleted);
  } catch (error) {
    next(error);
  }
}