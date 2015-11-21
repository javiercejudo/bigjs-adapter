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
  mod: mod,
  pow: pow,
  sqrt: sqrt,
  equals: equals,
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

function mod(x, y) {
  return x.mod(y);
}

function pow(x, y) {
  return x.pow(Number(y));
}

function sqrt(x) {
  return x.sqrt();
}

function equals(x, y) {
  return x.eq(y);
}

function toString(x) {
  return x.toString();
}
