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
import {
    postRoomController,
    getRoomController,
    putRoomController,
    getAllRoomsController,
    getRoomByIdController,
    deleteRoomController
} from '../controllers/roomController.js'
import { validateToken } from "../utilities/tokenValidation.js";
import { upload } from "../utilities/multerValidation.js";

const router = Router()

// owner routes
router.post('/owners/register', ownerRegisterController)
router.post('/owners/login', ownerLoginController)

// building routes
router.get('/building', validateToken, getBuildingController)
router.post('/building', validateToken, postBuildingController)
router.put('/building/:id', validateToken, putBuildingController)
router.delete('/building/:id', validateToken, deleteBuildingController)

// room routes
router.get('/room/:id', validateToken, getRoomController)
router.get('/rooms', getAllRoomsController)
router.get('/rooms/:id', getRoomByIdController)
router.post('/room', validateToken, upload.array("files"), postRoomController)
router.put('/room/:id', validateToken, upload.array("files"), putRoomController)
router.delete('/room/:id', validateToken, deleteRoomController)


export default router
