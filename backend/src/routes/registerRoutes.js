import { Router } from "express";
import {
  getAllAppointments,
  registerAppointment,
} from "../controllers/registerControllers.js";

const router = Router();

router.get("/appointments", getAllAppointments);
router.post("/register", registerAppointment);

export default router;
