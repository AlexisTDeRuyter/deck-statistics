(function() {
  var app = angular.module('MyApp', ['ngMaterial', 'googlechart', 'deck-directives'])

  app.controller('DeckController', function() {
    this.name = 'UG Merfolk',
    this.format = 'Standard',
    this.cards = cards,
    this.cardTypes = ['Creature', 'Planeswalker', 'Instant', 'Sorcery', 'Enchantment', 'Land'],
    this.columns = columns
  })

  app.controller('ManaCurveChartCtrl', function($scope) {
    $scope.myChartObject = {};

    $scope.myChartObject.type = "ColumnChart";

    $scope.cmcs = tallyCmcs()

    $scope.myChartObject.data = {"cols": [
        {id: "t", label: "CMC", type: "string"},
        {id: "s", label: "Cards", type: "number"}
      ], "rows": $scope.cmcs
    };

    $scope.myChartObject.options = {
        'title': 'Mana Curve',
        'height': '100%',
        'width': '100%',
        backgroundColor: { fill:'transparent' },
        legend: { position: "none" },
        vAxes: {
          0: {title: 'No. of Cards'}
        },
        dataOpacity: 0.5,
        hAxis: {
          title: 'Converted Mana Cost',
        },
        vAxis: {
          format: '#'
        }
    };
  })

  app.controller('ColorsChartCtrl', function($scope) {
    $scope.myChartObject = {};

    $scope.myChartObject.type = 'PieChart';

    $scope.colors = tallyColors()

    $scope.myChartObject.data = {'cols': [
        {id: 't', label: 'Color', type: 'string'},
        {id: 's', label: 'Cards', type: 'number'}
      ], 'rows': $scope.colors
    };

    $scope.myChartObject.options = {
      'title': 'Color Distribution',
      'height': '100%',
      'width': '100%',
      backgroundColor: { fill:'transparent'},
      colors: ['#EEEEEE', '#90CAF9', '#CE93D8', '#EF9A9A', '#A5D6A7'],
      pieSliceBorderColor: '#BDBDBD',
      pieSliceTextStyle: { color: 'black' },
    }
  })

  var unsortedCards = [
    {
      name: "Herald of Secret Streams",
      main: 1,
      side: 0,
      color: ['U'],
      cmc: 4,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/59.jpg?1503922839',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/59.jpg?1503922839'
    },
    {
      name: 'Fleet Swallower',
      main: 1,
      side: 0,
      color: ['U'],
      cmc: 7,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/57.jpg?1505492781',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/57.jpg?1505492781'
    },
    {
      name: "Kumena's Speaker",
      main: 2,
      side: 0,
      color: ['G'],
      cmc: 1,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/196.jpg?1504535642',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/196.jpg?1504535642'
    },
    {
      name: "Jungle Delver",
      main: 2,
      side: 0,
      color: ['G'],
      cmc: 1,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/195.jpg?1505488709',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/195.jpg?1505488709'
    },
    {
      name: "Deeproot Warrior",
      main: 2,
      side: 0,
      color: ['G'],
      cmc: 2,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/186.jpg?1505488213',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/186.jpg?1505488213'
    },
    {
      name: "Jace's Sentinel",
      main: 3,
      side: 0,
      color: ['U'],
      cmc: 2,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/283.jpg?1504741339',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/283.jpg?1504741339'
    },
    {
      name: "Shaper Apprentice",
      main: 2,
      side: 0,
      color: ['U'],
      cmc: 2,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/75.jpg?1505490505',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/75.jpg?1505490505'
    },
    {
      name: "Vineshaper Mystic",
      main: 2,
      side: 0,
      color: ['G'],
      cmc: 3,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/214.jpg?1505405621',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/214.jpg?1505405621'
    },
    {
      name: "Shapers of Nature",
      main: 2,
      side: 0,
      color: ['G', 'U'],
      cmc: 3,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/228.jpg?1504571968',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/228.jpg?1504571968'
    },
    {
      name: "Jade Guardian",
      main: 2,
      side: 0,
      color: ['G'],
      cmc: 4,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/194.jpg?1505488630',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/194.jpg?1505488630'
    },
    {
      name: "Headwater Sentries",
      main: 2,
      side: 0,
      color: ['U'],
      cmc: 4,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/58.jpg?1505068893',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/58.jpg?1505068893'
    },
    {
      name: "Tempest Caller",
      main: 1,
      side: 0,
      color: ['U'],
      cmc: 4,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/86.jpg?1505490935',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/86.jpg?1505490935'
    },
    {
      name: "Air Elemental",
      main: 2,
      side: 0,
      color: ['U'],
      cmc: 5,
      type: 'Creature',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/45.jpg?1505478813',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/45.jpg?1505478813'
    },
    {
      name: "Grasping Current",
      main: 2,
      side: 0,
      color: ['U'],
      cmc: 5,
      type: 'Sorcery',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/282.jpg?1504283199',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/282.jpg?1504283199'
    },
    {
      name: "River Heralds' Boon",
      main: 3,
      side: 0,
      color: ['G'],
      cmc: 2,
      type: 'Instant',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/204.jpg?1505751172',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/204.jpg?1505751172'
    },
    {
      name: "Castaway's Despair",
      main: 4,
      side: 0,
      color: ['U'],
      cmc: 4,
      type: 'Enchantment',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/281.jpg?1504283085',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/281.jpg?1504283085'
    },
    {
      name: "Woodland Stream",
      main: 4,
      side: 0,
      color: [],
      cmc: null,
      type: 'Land',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/284.jpg?1504283346',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/284.jpg?1504283346'
    },
    {
      name: "Forest",
      main: 11,
      side: 0,
      color: [],
      cmc: null,
      type: 'Land',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/279.jpg?1505490312',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/279.jpg?1505490312'
    },
    {
      name: "Island",
      main: 11,
      side: 0,
      color: [],
      cmc: null,
      type: 'Land',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/267.jpg?1505490157',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/267.jpg?1505490157'
    },
    {
      name: "Jace, Ingenious Mind-Mage",
      main: 1,
      side: 0,
      color: ['U'],
      cmc: 6,
      type: 'Planeswalker',
      artCrop: 'https://img.scryfall.com/cards/art_crop/en/xln/280.jpg?1504282950',
      normalImg: 'https://img.scryfall.com/cards/normal/en/xln/280.jpg?1504282950'
    },
  ]

  var cards = {
    Creature: unsortedCards.filter(function(card) {
      return card.type === 'Creature'
    }),
    Planeswalker: unsortedCards.filter(function(card) {
      return card.type === 'Planeswalker'
    }),
    Instant: unsortedCards.filter(function(card) {
      return card.type === 'Instant'
    }),
    Sorcery: unsortedCards.filter(function(card) {
      return card.type === 'Sorcery'
    }),
    Enchantment: unsortedCards.filter(function(card) {
      return card.type === 'Enchantment'
    }),
    Land: unsortedCards.filter(function(card) {
      return card.type === 'Land'
    }),
  }

  var columns = seperateColumns()

  var maxCMC = unsortedCards.reduce(function(prev, curr) {
    return prev.cmc > curr.cmc ? prev : curr
  }).cmc

  function tallyCmcs () {
    var cmcs = []
    for(var i = 0; i < (maxCMC + 1); i++) {
      var matches = unsortedCards.map(function(card) {
        if (card.cmc === i) {
          return card.main
        } else {
          return 0
        }
      })
      var amount = matches.reduce(function(sum, value) {
        return sum + value;
      }, 0)
      cmcs.push(
        {c: [
          {v: i},
          {v: amount},
        ]}
      )
    }
    return cmcs
  }

  function tallyColors () {
    var colors = {
      'W': 0,
      'U': 0,
      'B': 0,
      'R': 0,
      'G': 0
    }
    unsortedCards.forEach(function(card) {
      card.color.forEach(function(color) {
        colors[color] = (colors[color] + card.main)
      })
    })
    totalColors = [
      {c: [
        {v: 'White'},
        {v: colors.W}
      ]},
      {c: [
        {v: 'Blue'},
        {v: colors.U}
      ]},
      {c: [
        {v: 'Black'},
        {v: colors.B}
      ]},
      {c: [
        {v: 'Red'},
        {v: colors.R}
      ]},
      {c: [
        {v: 'Green'},
        {v: colors.G}
      ]},
    ]
    return totalColors
  }

  function seperateColumns() {
    var col1 = []
    var col2 = []
    var sortedCategories = Object.values(cards).sort(function(a, b) {
      return b.length - a.length
    })
    var col1Count = sortedCategories[0].length
    col1.push(sortedCategories.shift())
    var col2Count = sortedCategories[0].length
    col2.push(sortedCategories.shift())
    repeatTimes = sortedCategories.length

    for (var i = 0; i < repeatTimes; i++) {
      if (col1Count <= col2Count) {
        col1Count += sortedCategories[0].length
        col1.push(sortedCategories.shift())
      } else {
        col2Count += sortedCategories[0].length
        col2.push(sortedCategories.shift())
      }
    }
    return [col1, col2]
  }
})()
