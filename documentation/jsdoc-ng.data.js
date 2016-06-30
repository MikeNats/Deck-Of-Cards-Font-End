(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Deck Of Cards").constant('$readme',  '').constant('$doclets', [
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "deckApiFctry",
    "memberof": "module:deckModule",
    "description": "<p>User authentication.</p>",
    "requires": [
      "module:$http",
      "module:deckModule+module:deckModule.CARDS_API_PATHS"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "scope": "static",
    "longname": "module:deckModule.deckApiFctry",
    "jsConcept": true,
    "$href": "module:deckModule.deckApiFctry",
    "$id": "T000002R000002"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "constant"
      ]
    },
    "name": "CARDS_API_PATHS",
    "memberof": "module:deckModule",
    "description": "<p>Contains Api urls</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "scope": "static",
    "longname": "module:deckModule.CARDS_API_PATHS",
    "jsConcept": true,
    "$href": "module:deckModule.CARDS_API_PATHS",
    "$id": "T000002R000004"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "controller"
      ]
    },
    "name": "deckCtrl",
    "memberof": "module:deckModule",
    "description": "<p>Fetch Cards and initialize scope.</p>",
    "requires": [
      "module:$scope"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "scope": "static",
    "longname": "module:deckModule.deckCtrl",
    "jsConcept": true,
    "$href": "module:deckModule.deckCtrl",
    "$id": "T000002R000006"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "name": "deckModule",
    "access": "public",
    "scope": "static",
    "description": "<p>Contains Deck of Cards Services.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "longname": "module:deckModule",
    "$href": "module:deckModule",
    "$id": "T000002R000011"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "drawCardsFctry",
    "memberof": "module:deckModule",
    "description": "<p>For each given number of cards returns an array\nwith the same length of the given  card number that contains,\nnon active cads,\nstarting from the top on the given cards array</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "scope": "static",
    "longname": "module:deckModule.drawCardsFctry",
    "jsConcept": true,
    "$href": "module:deckModule.drawCardsFctry",
    "$id": "T000002R000013"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "drawCards",
    "requires": [
      "module:deckModule+module:deckModule.drawCardsFctry"
    ],
    "memberof": "module:deckModule",
    "description": "<p>Encapsulates draw Cards button functionality</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:deckModule.drawCards",
    "jsConcept": true,
    "$href": "module:deckModule.drawCards",
    "$id": "T000002R000018"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "sortCards",
    "memberof": "module:deckModule",
    "requires": [
      "module:deckModule+module:deckModule.drawCardsFctry"
    ],
    "description": "<p>Encapsulates sortCard button functionality</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:deckModule.sortCards",
    "jsConcept": true,
    "$href": "module:deckModule.sortCards",
    "$id": "T000002R000026"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "sortCardsFctry",
    "memberof": "module:deckModule",
    "description": "<p>Returns a sorted array\nFirst level of shorting: Per first per suite attribute\nSecond level of sorting: Per per number attribute\nPriorities per suite: 'C', 'S', 'H', 'D'\nPriorities per number: 14...2</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "scope": "static",
    "longname": "module:deckModule.sortCardsFctry",
    "jsConcept": true,
    "$href": "module:deckModule.sortCardsFctry",
    "$id": "T000002R000033"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "shuffleCardsFctry",
    "memberof": "module:deckModule",
    "description": "<p>//https://www.frankmitchell.org/2015/01/fisher-yates/</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular 1.5.5",
    "scope": "static",
    "longname": "module:deckModule.shuffleCardsFctry",
    "jsConcept": true,
    "$href": "module:deckModule.shuffleCardsFctry",
    "$id": "T000002R000035"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "shuffleCards",
    "memberof": "module:deckModule",
    "requires": [
      "module:deckModule+module:deckModule.shuffleCardsFctry"
    ],
    "description": "<p>Encapsulates shuffle button functionality</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:deckModule.shuffleCards",
    "jsConcept": true,
    "$href": "module:deckModule.shuffleCards",
    "$id": "T000002R000044"
  }
]);})();