import express from 'express'
import { deleteUser, getAllusers } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/getusers', getAllusers)
router.delete('/deleteuser/:id',deleteUser)





export default router