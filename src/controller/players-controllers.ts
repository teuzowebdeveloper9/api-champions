import { Request, Response } from "express"
import {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
  deletePlayer
} from "../services/players-service"
import { v4 as uuidv4 } from "uuid"

export async  function listPlayers(req: Request, res: Response) {
  res.json(getAllPlayers())
}

export async  function getPlayer(req: Request, res: Response) {
  const player = getPlayerById(req.params.id)
  if (!player) return res.status(404).json({ error: "Jogador não encontrado" })
  res.json(player)
}

export async function createPlayer(req: Request, res: Response) {
  const { name, age, position } = req.body
  if (!name || !age || !position) {
    return res.status(400).json({ error: "Dados obrigatórios: name, age, position" })
  }
  const player = { id: uuidv4(), name, age, position }
  addPlayer(player)
  res.status(201).json(player)
}

export async function patchPlayer(req: Request, res: Response) {
  const updated = updatePlayer(req.params.id, req.body)
  if (!updated) return res.status(404).json({ error: "Jogador não encontrado" })
  res.json(updated)
}

export async function removePlayer(req: Request, res: Response) {
  const ok = deletePlayer(req.params.id)
  if (!ok) return res.status(404).json({ error: "Jogador não encontrado" })
  res.status(204).send()
} 