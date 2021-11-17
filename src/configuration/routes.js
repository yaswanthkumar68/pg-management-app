import { Router } from "express";
import {
    ownerRegisterController,
    ownerLoginController
} from '../controllers/ownerController.js'

const router = Router()

// owner routes
router.post('/owners/register', ownerRegisterController)
router.post('/owners/login', ownerLoginController)



export default router
