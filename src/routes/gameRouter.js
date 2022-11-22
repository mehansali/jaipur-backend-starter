import express from "express"
import * as gameService from "../services/gameService"
const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Missing name parameter")
  }
  const newGame = gameService.createGame(req.body.name)
  res.status(200).json({ id: newGame.id, name: newGame.name })
})

// Listen to get /games
router.get("/", function (req, res) {
  const games = gameService.getGames()
  return res.status(200).json(games)
})

router.post("/:gameId/players/:playerId/take-good", function (req, res) {
  const id = req.params.gameId
  const playerId = parseInt(req.params.playerId)
  const goodBody = req.body.good
  const game = gameService.findGameById(id)
  console.log(game)

  if (!game) {
    return res.status(400).send("eerror frrr")
  }

  const index = game.market.findIndex((good) => good === goodBody)
  if (index) {
    game.market[index] = game._deck[0]
  }
  const playergame = {
    id: game.id,
    name: game.name,
    market: game.market,
    hand: game._players[playerId].hand,
    currentPlayerIndex: game.currentPlayerIndex,
    tokens: game.tokens,
    bonusTokens: game._bonusTokens,
  }
  console.log(playergame)
  res.status(200).json(playergame)
})

// Listen to get /games
router.get("/", function (req, res) {
  const games = gameService.getGames()
  res.status(200).json(games)
})

// Get /games/id
router.get("/:gameId/players/:playerId", function (req, res) {
  const id = req.params.gameId
  const game = gameService.getGamesById(id)
  console.log(game)
  if (!game) {
    res.status(404).json("Game not found")
  }
  const playerId = parseInt(req.params.playerId)
  const playergame = {
    id: game.id,
    name: game.name,
    market: game.market,
    hand: game._players[playerId].hand,
    currentPlayerIndex: game.currentPlayerIndex,
    tokens: game.tokens,
    bonusTokens: game._bonusTokens,
  }
  console.log(playergame)
  res.status(200).json(playergame)
})

export default router
