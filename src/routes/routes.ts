import { Router } from "express";
import { getPlayer } from "../controller/players-controllers";

const router = Router()

router.get('/players', getPlayer)

export default router