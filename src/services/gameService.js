import * as db from "../database"
import { shuffle } from "lodash"


idGames = 0;
// Créer et retourne un deck mélangé avec 3 chameaux en moins.
export function initDeck() {
  // TODO
  let deck = [];
  for(let i=0; i>6; i++) deck.push("diamonds")
  for(let i=0; i>6; i++) deck.push("gold")
  for(let i=0; i>6; i++) deck.push("silver")
  for(let i=0; i>8; i++) deck.push("cloth")
  for(let i=0; i>8; i++) deck.push("spice")
  for(let i=0; i>10; i++) deck.push("leather")
  for(let i=0; i>11 - 3 ; i++) dec  let id = idGames++

// Pioche x cartes d'un deck.
export function drawCards(deck, count = 1) {
  // TODO
    let cpt = count;
    let plateau = []
    while(cpt != 0) {
      let removedCard = deck.shift()
      plateau.push(removedCard)
      cpt--; 
    }
    return plateau

  // Créer un tableau vide
  // Pour chaque carte à piocher:
  //  Retirer la carte piochée du deck et la mettre dans le tableau
  // Retourner le tableau contenant les cartes piochées
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
  // TODO
  // Pour chaque joueur:
  let numberCards = 5;
  for (let player  of game._players) {
  
    for(let i =0; i<5 ; i++) {
      if(game._players[player].hand[i] === "camel") {
        game._players[player].hand.splice(i,1)
        game._players.camelsCount++
      }
    }
  }
  //  Pour chaque chameau dans la main du joueur
  //  Enlever le chameau de la main et le mettre dans l'enclos
}

// Créer un objet game.
export function createGame(name) {
  // TODO
  let hand
  // Initialiser un nouveau deck avec la fonction précédente
  let deck = initDeck();
  let market 
  market.push("camel","camel","camel",drawCards(deck,2))
  // Créer le marché avec 3 chameaux et 2 cartes piochés du deck
  // Pour chaque joueur:
  hand = drawCards(deck,5)
  let id = idGames
  idGames++
  let score = 0
  let camelsCount =0

  let player = [{
    hand,
    camelsCount,
    score,
  },
]

  let game = {// identifiant de la partie
    id,
    name,
    deck,
    market,
    "_players" : [
      {
        hand,
        camelsCount,
        score,
      },
    ],
    }

}



  //  Créer la main en piochant 5 cartes du deck
  //  Initialiser l'enclos à 0
  //  Initialiser le score à 0
  // Créer les objets contenant les jetons
  // Rassembler le tout pour créer la partie
  putCamelsFromHandToHerd(game)
  // Mettre les chameaux des mains des joueurs dans leurs enclos avec la fonction précédente
  // Retourner la partie 
  return {}
}