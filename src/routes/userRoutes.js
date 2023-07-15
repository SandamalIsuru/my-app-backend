const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get get user by id /api/user
router.get('/:id', userController.getUserById);

// POST add user /api/user
router.post('/', userController.createUser);

// PUT update user /api/user
router.put('/:id', userController.updateUser);

module.exports = router;
