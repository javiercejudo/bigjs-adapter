/*jshint node:true */

'use strict';

var identity = require('lodash.identity');
var bigjs = require('big.js');

module.exports = {
  getInstance: bigjs,
  getPrecision: getPrecision,
  setPrecision: setPrecision,
  plus: plus,
  minus: minus,
  times: times,
  div: div,
  pow: pow,
  toString: toString,
  valueOf: toString,
  parseInput: identity
};

function getPrecision(Big) {
  return Big.DP;
}

function setPrecision(Big, n) {
  Big.DP = n;
}

function plus(x, y) {
  return x.plus(y);
}

function minus(x, y) {
  return x.minus(y);
}

function times(x, y) {
  return x.times(y);
}

function div(x, y) {
  return x.div(y);
}

function pow(x, y) {
  return x.pow(Number(y));
}

function toString(x) {
  return x.toString();
}
