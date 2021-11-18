import { Router } from "express";
import {
    ownerRegisterController,
    ownerLoginController
} from '../controllers/ownerController.js'
import {
    postBuildingController,
    getBuildingController,
    putBuildingController,
    deleteBuildingController
} from '../controllers/buildingController.js'
import { validateToken } from "../utilities/tokenValidation.js";


const router = Router()

// owner routes
router.post('/owners/register', ownerRegisterController)
router.post('/owners/login', ownerLoginController)

// building routes
router.get('/building', validateToken, getBuildingController)
router.post('/building', validateToken, postBuildingController)
router.put('/building/:id', validateToken, putBuildingController)
router.delete('/building/:id', validateToken, deleteBuildingController)



export default router
