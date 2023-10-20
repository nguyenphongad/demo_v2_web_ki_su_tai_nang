const router = require('express').Router();
const accessControllers = require('../../controllers/access.controllers');

router.post('/login', accessControllers.login);

module.exports = router;
