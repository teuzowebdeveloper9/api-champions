import { Router } from "express";
import { listPlayers,getPlayer,createPlayer,patchPlayer,removePlayer } from "../controller/players-controllers";

const router = Router();

router.get("/players", listPlayers);
router.get("/players/:id", getPlayer);
router.post("/players", createPlayer);
router.patch("/players/:id", patchPlayer);
router.delete("/players/:id", removePlayer);

export default router;