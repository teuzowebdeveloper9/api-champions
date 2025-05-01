"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = void 0;
const players_service_1 = require("../services/players-service");
const getPlayer = (req, res) => {
    const data = players_service_1.getPlayerService;
    res.status(200).json(data);
};
exports.getPlayer = getPlayer;
