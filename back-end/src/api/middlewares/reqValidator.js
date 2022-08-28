const Joi = require('joi');

const userSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email(),
  telefone: Joi.string().length(11),
  whatsapp: Joi.string().length(11),
});

const contactReqValidator = (req, res, next) => {
  const { 
    nome,
    email,
    telefone,
    whatsapp,
  } = req.body;
  if (telefone || whatsapp) {
    const { error } = userSchema.validate({
      nome,
      email,
      telefone,
      whatsapp,
    });
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
  } if (!telefone && !whatsapp) {
    return res.status(400).json({
      message: 'é necessário pelo menos um tipo de telefone no cadastro' });
  }
  next();
};

module.exports = { contactReqValidator };