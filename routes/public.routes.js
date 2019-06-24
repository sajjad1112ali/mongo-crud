const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');


router.get('/', publicController.test);
router.get('/login', publicController.login);
module.exports = router;