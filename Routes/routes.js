import express from 'express'

import { insertUser, getUser } from '../controller/userContoler.js'

const router = express.Router()

router.post('/add', insertUser)
router.get('/all', getUser)

export default router
