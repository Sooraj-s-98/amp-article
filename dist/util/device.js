"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.device = void 0;

var _styledComponents = require("styled-components");

const sizes = {
  tiny: 320,
  phone: 599,
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  huge: 1800
};
const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => _styledComponents.css`
    @media (min-width: ${(sizes[label] + 1) / 16}em) {
      ${(0, _styledComponents.css)(...args)};
    }
  `;

  return acc;
}, {});
const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => _styledComponents.css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${(0, _styledComponents.css)(...args)};
    }
  `;

  return acc;
}, {});
const device = {
  above,
  below,
  sizes
};
exports.device = device;