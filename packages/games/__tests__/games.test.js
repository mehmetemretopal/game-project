'use strict';

const games = require('..');
const assert = require('assert').strict;

assert.strictEqual(games(), 'Hello from games');
console.info('games tests passed');
