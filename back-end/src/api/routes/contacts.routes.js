const express = require('express');
const { createContact, updateContact, getContacts, deleteContact } = require('../controllers/contacts');
const { contactReqValidator } = require('../middlewares/reqValidator');

const contactRouter = express.Router();

contactRouter.post('/', contactReqValidator, createContact);
contactRouter.put('/', contactReqValidator, updateContact);
contactRouter.get('/', getContacts);
contactRouter.delete('/', deleteContact)


module.exports = contactRouter;