"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ramda = require("ramda");

var _numerify = require("../../util/numerify");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BaseShape = props => {
  const realProps = (0, _ramda.omit)(['color', 'size', 'angle', 'fill', 'thickness', 'top', 'left'], props);
  return React.createElement("div", realProps);
};

const Shape = (0, _styledComponents.default)(BaseShape)`
  display: block;
  width: ${({
  size
}) => (0, _numerify.numerify)(size)};
  height: ${({
  size
}) => (0, _numerify.numerify)(size)};
  border-color: ${({
  color,
  theme
}) => color ? theme.colors[color] : ''};
  transform: ${({
  angle
}) => angle ? `rotate(${angle}deg)` : ''};
  border-width: ${({
  thickness
}) => thickness ? (0, _numerify.numerify)(thickness) : ''};
  border-style: solid;
  ${({
  fill
}) => {
  if (fill) {
    return _styledComponents.css`
        background: ${({
      color,
      theme
    }) => color ? theme.colors[color] : ''};
      `;
  }

  return _styledComponents.css`
      background: transparent;
    `;
}};
  ${({
  top,
  left
}) => {
  if (typeof top !== 'undefined' || typeof left !== 'undefined') {
    return _styledComponents.css`
        position: absolute;
        top: ${(0, _numerify.numerify)(top)};
        left: ${(0, _numerify.numerify)(left)};
      `;
  }

  return '';
}};
`;
Shape.Square = (0, _styledComponents.default)(Shape)``;
Shape.Circle = (0, _styledComponents.default)(Shape)`
  border-radius: 100em;
`;

Shape.Dot = props => React.createElement(Shape.Circle, _extends({}, props, {
  fill: true
}));

var _default = Shape;
exports.default = _default;