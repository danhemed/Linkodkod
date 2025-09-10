import express from "express";
import { getUsersCtrl, getUserCtrl, createNewUserCtrl } from "../controllers/user.ctrl.js";

const router = express.Router();

router.get('/users', getUsersCtrl);

router.get('/users/:username', getUserCtrl);

router.post('/users/', createNewUserCtrl);

export default router;