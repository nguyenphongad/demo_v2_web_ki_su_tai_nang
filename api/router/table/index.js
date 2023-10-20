const router = require('express').Router();
const rowControllers = require('../../controllers/row.controllers');

router.post('/row', rowControllers.addRow);

module.exports = router;
