import * as gameService from "./gameService"
import * as db from "../database"

beforeEach(() => {
  db.clear()
})

describe("Game service", () => {
  test("should init a deck", () => {
    const defaultDeck = gameService.initDeck()
    expect(defaultDeck.length).toBe(52)
    expect(defaultDeck.filter((card) => card === "diamonds").length).toBe(6)
    // etc
  })

  test("should draw cards", () => {
    const deck = ["camel", "diamonds", "gold"]
    const drawnCard = gameService.drawCards(deck, 1)
    expect(deck.length).toBe(2)
    expect(drawnCard).toStrictEqual(["camel"])
  })

  test("should put camels from hand to herd", () => {
    const game = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toBe(1)

    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(game._players[1].camelsCount).toBe(0)
  })

  test("should get games from db", () => {
    db.saveGame({ id: "toto", name: "toto" })
    db.saveGame({ id: "tutu", name: "tutu" })
    const game = gameService.getGames()
    expect(game.length).toBe(2)
  })
})
