import express from "express";
import { SeguridadController } from "../controllers/seguridad.controller.js";

const router = express.Router();

router.post("/login", SeguridadController.login);
router.post("/block", SeguridadController.blockUser);
router.post("/unblock", SeguridadController.unblockUser);
router.post("/refresh-token", SeguridadController.refreshToken);

export default router;
