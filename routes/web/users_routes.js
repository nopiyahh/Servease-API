
const express = require('express');
const routes = express.Router();
const usersController = require('../../controllers/users');
const {authenticateToken,isAdmin} = require('../../middleware/auth');

routes.get('/', usersController.users)
routes.get('/:id', authenticateToken,isAdmin, usersController.userDetailByID)


module.exports = routes;