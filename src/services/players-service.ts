import fs from "fs"
import path from "path"

const dataPath = path.join(__dirname, "../data/players.json");

type Player = {
  id: string;
  name: string;
  age: number;
  position: string;
  [key: string]: any;
};

function readPlayers(): Player[] {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

function writePlayers(players: Player[]): void {
  fs.writeFileSync(dataPath, JSON.stringify(players, null, 2));
}

export function getAllPlayers(): Player[] {
  return readPlayers();
}

export function getPlayerById(id: string): Player | undefined {
  const players = readPlayers();
  return players.find((p: Player) => p.id === id);
}

export function addPlayer(player: Player): Player {
  const players = readPlayers();
  players.push(player);
  writePlayers(players);
  return player;
}

export function updatePlayer(id: string, updates: Partial<Player>): Player | null {
  const players = readPlayers();
  const idx = players.findIndex((p: Player) => p.id === id);
  if (idx === -1) return null;
  players[idx] = { ...players[idx], ...updates };
  writePlayers(players);
  return players[idx];
}

export function deletePlayer(id: string): boolean {
  const players = readPlayers();
  const idx = players.findIndex((p: Player) => p.id === id);
  if (idx === -1) return false;
  players.splice(idx, 1);
  writePlayers(players);
  return true;
}