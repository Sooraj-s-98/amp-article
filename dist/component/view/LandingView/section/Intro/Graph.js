"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _FitText = _interopRequireDefault(require("../../../../amp/FitText"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

var _Hidable = _interopRequireDefault(require("../../../../base/Hidable"));

var _Container = _interopRequireDefault(require("../../../../base/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StickyContainer = _styledComponents.default.div`
  height: 180vh;
  perspective: 200px;
`;
const yearStart = 1880; // left-most year edge

const yearEnd = 2040; // right-most year edge
// Determine edge position in %

const calcLeft = year => (year - yearStart) / (yearEnd - yearStart) * 100;

const calcWidth = (start, end) => (end - start) / (yearEnd - yearStart) * 100;

const StickyWrapper = _styledComponents.default.div`
  position: sticky;
  top: calc(100vh - 40%);
`;
const GraphContainer = _styledComponents.default.div`
  perspective: 200px;
  perspective-origin: 65% center;
  margin-top: 140px;
  position: relative;
  min-width: 640px;
  transform: translateX(-50%);
  left: 50%;
  position: relative;
`;
const Header = _styledComponents.default.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;

  & > div {
    width: 100%;
    flex-grow: 2;
  }

  & > div:first-child,
  & > div:last-child {
    flex-grow: 1;
    width: 50%;
  }
`;
const Grid = _styledComponents.default.div`
  position: relative;
  height: 88vh;
  ${_device.device.below.tabletLandscape`height: 330px;`};
`;
const Columns = _styledComponents.default.div`
  display: flex;
  height: 100%;
`;
const Col = (0, _styledComponents.default)(_Hidable.default)`
  width: 100%;
  position: relative;
  border-right: 1px solid rgba(216, 216, 216, 0.18);

  &:last-child {
    border-right: 0px none;
  }
`;
const YearHeader = (0, _styledComponents.default)(_Hidable.default)`
  font-size: 16px;
  font-weight: 400;
  opacity: 0;
`;
const Data = _styledComponents.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const DataSilent = _styledComponents.default.div`
  background: #444;
  position: absolute;
  bottom: 0;
  height: calc(100% - 2rem);
  left: ${calcLeft(1925)}%;
  width: ${calcWidth(1925, 1945)}%;
  padding: 40px 12px;
`;
const DataBlank = _styledComponents.default.div`
  background: linear-gradient(
    45deg,
    #444 7.14%,
    #000 7.14%,
    #000 50%,
    #444 50%,
    #444 57.14%,
    #000 57.14%,
    #000 100%
  );
  background-size: 9.9px 9.9px;
  position: absolute;
  bottom: 0;
  height: 100%;
  left: ${calcLeft(1945)}%;
  width: ${calcWidth(1945, 1980)}%;
  text-align: center;
  padding-top: 115px;
`;
const DataMills = _styledComponents.default.div`
  background: ${({
  theme
}) => theme.colors.rose}
    url('/static/millenials-graph-col-mask.png');
  background-size: cover;
  position: absolute;
  bottom: 0;
  height: calc(100% - 7rem);
  left: ${calcLeft(1980)}%;
  width: ${calcWidth(1980, 1994)}%;
  padding: 40px 12px;
  z-index: 222;
`;
const Year = (0, _styledComponents.default)(({
  className,
  ...rest
}) => React.createElement(_FitText.default, _extends({
  class: className
}, rest)))`
  opacity: 0.5;
`;

class YearAnimation extends React.Component {
  render() {
    const animId = `${this.props.forClass}Anim`;
    return React.createElement("div", null, React.createElement(_PositionObserver.default, {
      "instersection-ratios": "1",
      on: `scroll:${animId}.seekTo(percent=event.percent)`
    }), React.createElement(_Animation.default, {
      id: animId,
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: `.${this.props.forClass}`,
          keyframes: [{
            offset: 0,
            opacity: 0
          }, {
            offset: this.props.offset,
            opacity: 0
          }, {
            offset: (this.props.offset + 0.1).toFixed(1),
            opacity: 1
          }, {
            offset: 1,
            opacity: 1
          }]
        }]
      }
    }));
  }

}

class DataAnimation extends React.Component {
  render() {
    const animId = `${this.props.forClass}Anim`;
    return React.createElement("div", null, React.createElement(_PositionObserver.default, {
      "instersection-ratios": "1",
      on: `scroll:${animId}.seekTo(percent=event.percent)`
    }), React.createElement(_Animation.default, {
      id: animId,
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: `.${this.props.forClass}`,
          keyframes: [{
            offset: 0,
            transform: 'translateY(50%)'
          }, {
            offset: this.props.offset,
            transform: 'translateY(50%)'
          }, {
            offset: 1,
            transform: 'translateY(0)'
          }]
        }]
      }
    }));
  }

}

class Graph extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(DataAnimation, {
      forClass: "dataSilent",
      offset: 0
    }), React.createElement(DataAnimation, {
      forClass: "dataBlank",
      offset: 0.2
    }), React.createElement(StickyContainer, null, React.createElement(StickyWrapper, null, React.createElement(_Container.default, null, React.createElement(GraphContainer, null, React.createElement(YearAnimation, {
      forClass: "yearHeader1",
      offset: 0.0
    }), React.createElement(YearAnimation, {
      forClass: "yearHeader2",
      offset: 0.1
    }), React.createElement(YearAnimation, {
      forClass: "yearHeader3",
      offset: 0.2
    }), React.createElement(YearAnimation, {
      forClass: "yearHeader4",
      offset: 0.3
    }), React.createElement(YearAnimation, {
      forClass: "yearHeader5",
      offset: 0.4
    }), React.createElement(YearAnimation, {
      forClass: "yearHeader6",
      offset: 0.5
    }), React.createElement(YearAnimation, {
      forClass: "yearHeader7",
      offset: 0.6
    }), React.createElement(Header, null, React.createElement("div", null), React.createElement(YearHeader, {
      className: "yearHeader1",
      hideFor: _device.device.below.tabletPortrait
    }, "1900"), React.createElement(YearHeader, {
      className: "yearHeader2"
    }, "1920"), React.createElement(YearHeader, {
      className: "yearHeader3"
    }, "1940"), React.createElement(YearHeader, {
      className: "yearHeader4"
    }, "1960"), React.createElement(YearHeader, {
      className: "yearHeader5"
    }, "1980"), React.createElement(YearHeader, {
      className: "yearHeader6"
    }, "2000"), React.createElement(YearHeader, {
      className: "yearHeader7",
      hideFor: _device.device.below.tabletPortrait
    }, "2020"), React.createElement("div", null)), React.createElement(Grid, null, React.createElement(Columns, null, React.createElement(Col, {
      hideFor: _device.device.below.tabletPortrait
    }), React.createElement(Col, null), React.createElement(Col, null), React.createElement(Col, null), React.createElement(Col, null), React.createElement(Col, null), React.createElement(Col, null), React.createElement(Col, {
      hideFor: _device.device.below.tabletPortrait
    })), React.createElement(Data, null, React.createElement(DataSilent, {
      className: "dataSilent"
    }, React.createElement(_FitText.default, {
      height: "60",
      width: "120",
      "max-font-size": "21",
      "min-font-size": "12",
      style: {
        fontWeight: 'bold'
      }
    }, "Silent", React.createElement("br", null), "Generation"), React.createElement(Year, {
      height: "60",
      width: "120",
      "max-font-size": "16"
    }, "1925 \u2014 1945")), React.createElement(DataBlank, {
      className: "dataBlank"
    }, React.createElement(_FitText.default, {
      height: "60",
      width: "120",
      "max-font-size": "21"
    }, "32 Years")), React.createElement(DataMills, {
      className: "dataMills",
      id: "millsColumn"
    }, React.createElement(_FitText.default, {
      height: "60",
      width: "120",
      "max-font-size": "21",
      style: {
        fontWeight: 'bold'
      }
    }, "Millenials"), React.createElement(Year, {
      height: "60",
      width: "120",
      "max-font-size": "16"
    }, "1980 \u2014 1994")))))))), React.createElement(_PositionObserver.default, {
      id: "graphObserver",
      "instersection-ratios": "1",
      on: "scroll:graphAnim.seekTo(percent=event.percent)"
    }), React.createElement(_Animation.default, {
      id: "graphAnim",
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: '#millsColumn',
          keyframes: [{
            transform: 'translate3d(0,50%,0)',
            offset: 0
          }, {
            transform: 'translate3d(0,0,0)',
            offset: 0.4
          }, {
            opacity: 1,
            offset: 0.69999
          }, {
            transform: 'translate3d(-35%,0,200px)',
            opacity: 0,
            offset: 0.7
          }, {
            transform: 'translate3d(-35%,0,200px)',
            opacity: 0,
            offset: 1
          }]
        }]
      }
    }));
  }

}

var _default = Graph;
exports.default = _default;