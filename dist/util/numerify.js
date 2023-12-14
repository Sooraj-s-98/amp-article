"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numerify = void 0;

const numerify = item => {
  if (typeof item === 'number') {
    return `${item}px`;
  } else if (typeof item === 'string') {
    return item;
  }

  return 'auto';
};

exports.numerify = numerify;