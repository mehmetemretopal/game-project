'use strict';

const gamecenter = require('..');
const assert = require('assert').strict;

assert.strictEqual(gamecenter(), 'Hello from gamecenter');
console.info('gamecenter tests passed');
