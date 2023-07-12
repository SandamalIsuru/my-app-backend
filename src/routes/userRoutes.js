const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users
router.post('/', userController.createUser);

// PUT /api/users
router.put('/:id', userController.updateUser);

module.exports = router;
