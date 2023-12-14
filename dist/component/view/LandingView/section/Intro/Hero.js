"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const StickyContainer = _styledComponents.default.div`
  height: 170vh;
  margin-bottom: -100vh;
`;
const HeroContainer = _styledComponents.default.div`
  perspective: 200px;
  text-align: center;
  text-transform: uppercase;
  font-family: Oswald;
  font-weight: bold;
  position: sticky;
  top: 2vh;

  ${_device.device.below.tabletLandscape`font-size: 1.5vw;`};
`;
const ZoomyText = _styledComponents.default.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
  padding: 0 25px;
`;
const ZoomUp = _styledComponents.default.div`
  transform-origin: bottom center;
`;
const ZoomDown = _styledComponents.default.div`
  transform-origin: top center;
`;
const Big = _styledComponents.default.div`
  font-size: 125px;
  ${_device.device.below.tabletLandscape`font-size: 12vw;`};
`;
const Bigger = _styledComponents.default.div`
  font-size: 250px;
  ${_device.device.below.tabletLandscape`font-size: 25vw;`};
`;
const Biggest = _styledComponents.default.div`
  font-size: 435px;
  ${_device.device.below.tabletLandscape`font-size: 46vw;`};
`;

class Hero extends React.Component {
  render() {
    return React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement(StickyContainer, null, React.createElement(HeroContainer, null, React.createElement(ZoomyText, null, React.createElement(ZoomUp, {
      id: "zoomUp"
    }, React.createElement(Big, null, "Breaking the"), React.createElement(Bigger, null, "status")), React.createElement(ZoomDown, {
      id: "zoomDown"
    }, React.createElement(Biggest, null, "quo"))), React.createElement(_PositionObserver.default, {
      on: "enter:hideScrollToTopAnim.start; exit:showScrollToTopAnim.start;"
    })), React.createElement(_Animation.default, {
      id: "testElemAnim",
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: '#bgVid > video',
          keyframes: [{
            opacity: 1,
            offset: 0
          }, {
            opacity: 0,
            offset: 0.5
          }, {
            opacity: 0,
            offset: 1
          }]
        }, {
          selector: '#zoomUp',
          keyframes: [{
            transform: 'translate3D(0, 0, 0)',
            offset: 0.4
          }, {
            transform: 'translate3D(0, -200vh, 1000px)',
            offset: 1
          }]
        }, {
          selector: '#zoomDown',
          keyframes: [{
            transform: 'translate3D(0, 0, 0)',
            offset: 0.4
          }, {
            transform: 'translate3D(0, 200vh, 1000px)',
            offset: 1
          }]
        }]
      }
    })), React.createElement(_PositionObserver.default, {
      id: "testElemObserver",
      "instersection-ratios": "1",
      on: "scroll:testElemAnim.seekTo(percent=event.percent)"
    }));
  }

}

var _default = Hero;
exports.default = _default;