"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controllers_1 = require("../controller/players-controllers");
const router = (0, express_1.Router)();
router.get('/players', players_controllers_1.getPlayer);
exports.default = router;
