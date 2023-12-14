"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

var _OrientationObserver = _interopRequireDefault(require("../../../../amp/OrientationObserver"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _Hidable = _interopRequireDefault(require("../../../../base/Hidable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ClockContainer = _styledComponents.default.div`
  ${_device.device.below.tabletLandscape``};
`;
const Letter = (0, _styledComponents.default)(_Text.default.Title)`
  font-size: 180px;
  line-height: 1.2em;
  display: block;
  ${_device.device.below.tabletLandscape`
    display: inline-block;
    font-size: 30vw;
  `};
`;
const Clock = _styledComponents.default.div`
  position: relative;
  ${_device.device.below.tabletLandscape`display: inline-block;`};
`;
const Hand = _styledComponents.default.div`
  background: ${({
  theme
}) => theme.colors.flushOrange};
  position: absolute;
  width: 10px;
  transform-origin: 50% 5px;
  border-radius: 5px 5px 0 0;
  top: calc(50% + 5px);
  left: calc(50% - 5px);
  transform: rotate(-180deg);
  ${_device.device.below.tabletLandscape`
    width: 6px;
    transform-origin: 50% 3px;
    border-radius: 3px 3px 0 0;
    top: calc(50% + 3px);
    left: calc(50% - 3px);
  `};
`;
Hand.Hour = (0, _styledComponents.default)(Hand)`
  transform: rotate(-90deg);
  height: 33px;
  ${_device.device.below.tabletLandscape`
    height: 5vw;
  `};
`;
Hand.Minute = (0, _styledComponents.default)(Hand)`
  height: 50px;
  ${_device.device.below.tabletLandscape`
    height: 7vw;
  `};
`;
const ClockBackground = _styledComponents.default.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border: 8px solid;
  border-radius: 1000px;
  border-color: ${({
  theme
}) => theme.colors.flushOrange};
  background: linear-gradient(rgba(252, 119, 0, 0), rgba(252, 119, 0, 0.5));
  ${_device.device.below.tabletLandscape`
    width: 25vw;
    height: 25vw;
  `};
`;

class WorkClock extends React.Component {
  render() {
    return React.createElement(ClockContainer, null, React.createElement(Letter, null, "W"), React.createElement(Clock, null, React.createElement(ClockBackground, null), React.createElement(_Hidable.default, {
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(Hand.Hour, {
      id: "desktop-hour-hand"
    }), React.createElement(Hand.Minute, {
      id: "desktop-minute-hand"
    })), React.createElement(_Hidable.default, {
      hideFor: _device.device.above.tabletLandscape
    }, React.createElement(Hand.Hour, {
      id: "mobile-hour-hand"
    }), React.createElement(Hand.Minute, {
      id: "mobile-minute-hand"
    }))), React.createElement(Letter, null, "R"), React.createElement(Letter, null, "K"), React.createElement(_PositionObserver.default, {
      "instersection-ratios": "0",
      on: 'scroll:desktopHourAnim.seekTo(percent=event.percent)'
    }), React.createElement(_Animation.default, {
      id: "desktopHourAnim",
      animation: {
        duration: '3s',
        fill: 'both',
        direction: 'alternate',
        animations: [{
          selector: '#desktop-hour-hand',
          keyframes: [{
            transform: 'rotate(-270deg)'
          }, {
            transform: 'rotate(-90deg)'
          }]
        }]
      }
    }), React.createElement(_PositionObserver.default, {
      "instersection-ratios": "0",
      on: 'scroll:desktopMinuteAnim.seekTo(percent=event.percent)'
    }), React.createElement(_Animation.default, {
      id: "desktopMinuteAnim",
      animation: {
        duration: '3s',
        fill: 'both',
        direction: 'alternate',
        animations: [{
          selector: '#desktop-minute-hand',
          keyframes: [{
            transform: 'rotate(-180deg)'
          }, {
            transform: 'rotate(1080deg)'
          }]
        }]
      }
    }), React.createElement(_OrientationObserver.default, {
      on: "gamma:mobileHourAnim.seekTo(percent=event.percent)"
    }), React.createElement(_Animation.default, {
      id: "mobileHourAnim",
      animation: {
        duration: '3s',
        fill: 'both',
        direction: 'alternate',
        animations: [{
          selector: '#mobile-hour-hand',
          keyframes: [{
            transform: 'rotate(-270deg)'
          }, {
            transform: 'rotate(-90deg)'
          }]
        }]
      }
    }), React.createElement(_OrientationObserver.default, {
      "beta-range": "0 180",
      on: "beta:mobileMinuteAnim.seekTo(percent=event.percent)"
    }), React.createElement(_Animation.default, {
      id: "mobileMinuteAnim",
      animation: {
        duration: '3s',
        fill: 'both',
        direction: 'alternate',
        animations: [{
          selector: '#mobile-minute-hand',
          keyframes: [{
            transform: 'rotate(-180deg)'
          }, {
            transform: 'rotate(1080deg)'
          }]
        }]
      }
    }));
  }

}

var _default = WorkClock;
exports.default = _default;