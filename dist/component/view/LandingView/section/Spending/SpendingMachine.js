"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const MachineContainer = _styledComponents.default.div`
  ${_device.device.below.tabletLandscape``};
`;
const Machine = _styledComponents.default.div`
  text-align: center;
  position: relative;
`;
const CardTrack = _styledComponents.default.div`
  overflow: hidden;
  display: block;
  width: 231px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: -372px;
  transform: translateX(-50%);
  z-index: 2;

  clip-path: polygon(0 0, 231px 0, 231px 600px, 0 600px);
`;
const Card = (0, _styledComponents.default)(_AmpImage.default)`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
`;
const MachineSlot = (0, _styledComponents.default)(_AmpImage.default)`
  position: absolute;
  z-index: 1;
  margin-top: 150px;
  left: 50%;
  transform: translateX(-50%);
`;

class SpendingMachine extends React.Component {
  render() {
    return React.createElement(MachineContainer, null, React.createElement(_PositionObserver.default, {
      id: "spendCardObserver",
      "instersection-ratios": "1",
      on: "scroll:spendCardAnim.seekTo(percent=event.percent)"
    }), React.createElement(Machine, null, React.createElement(CardTrack, null, React.createElement(Card, {
      id: "spendingCard",
      layout: "fixed",
      width: "231",
      height: "370",
      src: "/static/spending/credit-card@2x.png"
    })), React.createElement(MachineSlot, {
      layout: "fixed",
      width: "600",
      height: "131",
      src: "/static/spending/cash-machine@2x.png"
    })), React.createElement(_Animation.default, {
      id: "spendCardAnim",
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: '#spendingCard',
          switch: [{
            media: '(min-width: 900px)',
            keyframes: [{
              transform: 'translate(-50%, 0px)',
              offset: 0
            }, {
              transform: 'translate(-50%, 0px)',
              offset: 0.25
            }, {
              transform: 'translate(-50%, 40vh)',
              offset: 1
            }]
          }, {
            media: '(max-width: 899px)',
            keyframes: [{
              transform: 'translate(-50%, 0px)',
              offset: 0
            }, {
              transform: 'translate(-50%, 0px)',
              offset: 0.25
            }, {
              transform: 'translate(-50%, 100vw)',
              offset: 1
            }]
          }]
        }]
      }
    }));
  }

}

var _default = SpendingMachine;
exports.default = _default;