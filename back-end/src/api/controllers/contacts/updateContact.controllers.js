const { updateContactService } = require('../../services/contacts');

module.exports = async (req, res, next) => {
  try {
    const info = req.body;
    await updateContactService(info);
    return res.status(200).json({ message: 'Contato atualizado' });
  } catch (error) {
    next(error);
  }
};