(function() {
  var app = angular.module('MyApp', ['ngMaterial'])

  app.controller('DeckController', function() {
    this.name = 'Bant Eldrazi',
    this.format = 'Modern',
    this.cards = cards
  })

  var cards = [
    {
      name: 'Noble Hierarch',
      main: 4,
      side: 0,
      color: ['G'],
      cmc: 1.0,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/small/en/mm2/151.jpg?1496446638',
      normalImg: 'https://img.scryfall.com/cards/normal/en/mm2/151.jpg?1496446638'
    },
    {
      name: 'Path to Exile',
      main: 4,
      side: 0,
      color: ['W'],
      cmc: 1.0,
      type: 'Instant',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/mm3/17.jpg?1501890996',
      normalImg: 'https://img.scryfall.com/cards/normal/en/mm3/17.jpg?1501890996'
    }
  ]
})()
