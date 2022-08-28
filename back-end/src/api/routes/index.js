const express = require('express');
const contactRouter = require('./contacts.routes');

const router = express.Router();

router.use('/contacts', contactRouter);

module.exports = router;