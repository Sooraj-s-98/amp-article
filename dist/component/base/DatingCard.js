"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _AmpImage = _interopRequireDefault(require("../amp/AmpImage"));

var _Animation = _interopRequireDefault(require("../amp/Animation"));

var _PositionObserver = _interopRequireDefault(require("../amp/PositionObserver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CardContainer = _styledComponents.default.div`
  position: relative;
`;

class Observer extends React.Component {
  render() {
    return React.createElement(_PositionObserver.default, {
      id: `${this.props.baseId}-observer`,
      "instersection-ratios": "1",
      on: `scroll:${this.props.baseId}-anim.seekTo(percent=event.percent)`
    });
  }

}

class DirectionAnimation extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(Observer, {
      baseId: this.props.baseId
    }), React.createElement(_Animation.default, {
      id: `${this.props.baseId}-anim`,
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: `#${this.props.baseId}`,
          keyframes: [{
            offset: 0,
            opacity: 1,
            transform: 'translateX(0) rotate(0)'
          }, {
            offset: 0.5,
            opacity: 1,
            transform: 'translateX(0) rotate(0)'
          }, {
            offset: 0.625,
            opacity: 1,
            transform: `translateX(${this.props.x * 0.5}%) rotate(${this.props.r * 0.5}deg)`
          }, {
            offset: 0.75,
            opacity: 0,
            transform: `translateX(${this.props.x}%) rotate(${this.props.r}deg)`
          }, {
            offset: 1,
            opacity: 0,
            transform: `translateX(${this.props.x}%) rotate(${this.props.r}deg)`
          }]
        }]
      }
    }));
  }

}

class DatingCard extends React.Component {
  render() {
    const realProps = (0, _ramda.omit)(['flyoutDirection', 'layout', 'style'], this.props);
    const direction = this.props.flyoutDirection;
    const imgLayout = this.props.layout ? this.props.layout : 'fixed';
    let animation;

    if (direction && direction === 'left') {
      animation = React.createElement(DirectionAnimation, {
        baseId: this.props.id,
        x: -100,
        r: -45
      });
    } else if (direction && direction === 'right') {
      animation = React.createElement(DirectionAnimation, {
        baseId: this.props.id,
        x: 100,
        r: 45
      });
    }

    return React.createElement(CardContainer, {
      style: this.props.style
    }, React.createElement(_AmpImage.default, _extends({
      id: this.props.id,
      layout: imgLayout
    }, realProps)), animation);
  }

}

var _default = DatingCard;
exports.default = _default;