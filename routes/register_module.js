const express = require('express');
const router = express.Router();

const register_controller = require('../controllers/register_controller');

router.post('/login', register_controller.login);

router.post('/sigin', register_controller.sigin);

module.exports = router;