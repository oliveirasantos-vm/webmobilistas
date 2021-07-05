const express = require('express');
const router = express.Router();

const system_controller = require('../controllers/system_controller');

router.get('/', system_controller.home_page);

router.get('*', system_controller.error_404);

module.exports = router;