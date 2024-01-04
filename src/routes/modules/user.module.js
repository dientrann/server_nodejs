import express from 'express';

const router = express.Router();

import userController from '../../controllers/user.controller.js'

router.get('/', userController.findAll)

export default router;