"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _random = _interopRequireDefault(require("random"));

var _Shape = _interopRequireDefault(require("../Shape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledComponent = (0, _styledComponents.default)(() => null)({}).render().type;
const StyleSheetConsumer = new StyledComponent({}).render().type;
const ConfettiContainer = (0, _styledComponents.default)(({
  width: _w,
  height: _h,
  ...rest
}) => React.createElement("div", rest))`
  position: relative;
  width: ${({
  width
}) => width}px;
  height: ${({
  height
}) => height}px;
`;

const drift = ({
  rotate = 0,
  x,
  y
}) => {
  return _styledComponents.keyframes`
    0% {
      transform: translate(${x}px, ${y}px) rotate(${rotate}deg);
    }
    100% {
      transform: translate(0,0);
    }
  `;
};
/**
 * Provides an animatable wrapper for each Confetti shape.
 *
 * Animation param order: `name duration timing delay direction iterations fill-mode play-state`
 *
 * Problem 1: shapes all animate at the same time, looks robotic
 * Solution 1: add a random 0-2s animation-delay, inline style, overrides default 0s
 *
 * Problem 2: Long delays noticeably stutter shapes when animation finally starts
 * Solution 2: specify starting transform via inline style
 *
 * Problem 3: document contains 98113 bytes of CSS
 * Solution 3: ...
 */


const ConfettiWrapper = (0, _styledComponents.default)(({
  angle: _a,
  x: x,
  y: y,
  rotate: r = 0,
  ...rest
}) => {
  const delay = _random.default.float(0, 2).toFixed(2);

  const anim = drift({
    rotate: r,
    x,
    y
  });
  return React.createElement(StyleSheetConsumer, null, sheet => {
    anim.inject(sheet);
    return React.createElement("div", _extends({}, rest, {
      style: {
        animationName: anim.getName(),
        animationDelay: `${delay}s` // transform: `translate(${x}px, ${y}px) rotate(${r}deg)`,

      }
    }));
  });
})`
  animation: 4s ease-in-out 0s alternate infinite none running;
`;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const coords = (angle = 0, distance) => {
  let a = Math.abs(angle);

  if (a === 0) {
    a = _random.default.int(-359, 359);
  }

  let x = Math.trunc(distance * Math.sin(a) / Math.sin(90));
  let y = Math.trunc(distance * Math.sin(90 - a) / Math.sin(90));

  if (angle < 0) {
    x = -x;
    y = -y;
  }

  return {
    a,
    x,
    y
  };
};

const Confetti = (0, _styledComponents.default)(class Confetti extends React.Component {
  render() {
    const {
      pieces,
      size,
      color,
      ...rest
    } = this.props;
    const width = pieces.reduce((prev, cur) => {
      return Math.max(prev, cur.left + cur.size);
    }, 0);
    const height = pieces.reduce((prev, cur) => {
      return Math.max(prev, cur.top + cur.size);
    }, 0);
    return React.createElement(ConfettiContainer, _extends({
      width: width,
      height: height
    }, rest), pieces.map(({
      type,
      color: c = color,
      rotate: r,
      ...rest
    }, i) => {
      const {
        a,
        x,
        y
      } = coords(rest.angle, rest.size);

      const Component = _Shape.default[capitalize(type)];

      return React.createElement(ConfettiWrapper, {
        angle: a,
        x: x,
        y: y,
        rotate: r,
        key: i
      }, React.createElement(Component, _extends({
        key: i,
        size: size,
        color: c
      }, rest)));
    }));
  }

})``;
var _default = Confetti;
exports.default = _default;