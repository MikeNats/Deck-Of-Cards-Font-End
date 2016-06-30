[![Build Status](https://travis-ci.org/MikeNats/Deck-Of-Cards-Front-End.svg)](https://travis-ci.org/MikeNats/Deck-Of-Cards-Front-End) 
## Deck of Cards

This is a Full Stack Responsive JavaScript Application that emulates simple operations with a deck of card game

The back end repo can be found here: https://github.com/MikeNats/Deck-Of-Cards-Back-End.git

- Technologies:
-- Front End: HTML5, CSS, SASS, Foundation 5, Angular(1.5).
-- Front End Test Suite: Karma, Jasmine, Protractor.

-- Back End: Node, Express, MogoDB.
-- Back End Test Suite: Mocha.

Requirements

- NodeJs (+v4.4)
- Ruby
- Sass
- Grunt

How to use:
Clone both repos under the same root folder:
Front End repo: https://github.com/MikeNats/Deck-Of-Cards-Front-End.git
Front Back repo: https://github.com/MikeNats/Deck-Of-Cards-Back-End.git

Open 2 terminals on the root folder

On the first terminal:
- `cd Deck-Of-Cards-Back-End/`
- `npm i`
- `npm start`

On the second terminal:
- `cd Deck-Of-Cards-Front-End/`
- `npm i`
- `grunt deploy`
- `http://localhost:3000`


How to debug Front End
Unit tests:
- `Open a terminal on Deck-Of-Cards-Front-End/`
- `grunt test`

- or

- `Open a terminal on tests/UnitTests/`
- `karma start`

Integration tests:

- `Open a terminal`
- `npm install -g protractor`
- `webdriver-manager update`
- `webdriver-manager start`
- `Open a terminal on tests/IntergrationTests/`
- `protractor conf.js`

Development
`grunt watch`

To run unit test in Back end:
- `cd Deck-Of-Cards-Front-End/`
- `npm i`
- `grunt deploy`
- `open a terminal on Deck-Of-Cards-Back-End folder`
- `npm test`



