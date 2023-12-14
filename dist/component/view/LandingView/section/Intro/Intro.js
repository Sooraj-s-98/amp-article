"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Hidable = _interopRequireDefault(require("../../../../base/Hidable"));

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _Shape = _interopRequireDefault(require("../../../../base/Shape"));

var _Hero = _interopRequireDefault(require("./Hero"));

var _Graph = _interopRequireDefault(require("./Graph"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const IntroSection = _styledComponents.default.section`
  color: #fff;
  background: #000 url('/static/intro-bg-grid.svg');
  background-position: center 920px;
`;
const Author = _styledComponents.default.div`
  text-align: center;
  opacity: 0.7;
  margin-bottom: 40px;
`;
const CalloutContainer = (0, _styledComponents.default)(_Container.default)`
  margin-top: 500px;
  ${_device.device.below.tabletLandscape`margin-top: 190px;`};
`;
const Callout = _styledComponents.default.div`
  text-align: center;
  font-size: 24px;
  max-width: 620px;
  margin: 0 auto;
  padding: 0 25px;
  line-height: 40px;
  ${_device.device.below.tabletLandscape`text-align: left;`};
`;
const RectAnim = (0, _styledComponents.default)(({
  className,
  ...rest
}) => React.createElement("amp-img", _extends({
  layout: "fixed",
  class: className
}, rest)))`
  position: absolute;
`;
const Definition = _styledComponents.default.div`
  color: ${({
  theme
}) => theme.colors.aquamarine};
  font-weight: 300;
  margin: 420px 5% 0 14%;
  position: relative;
  ${_device.device.below.tabletLandscape`
    margin: 420px 25px 0;

  `};
`;
const DefBig = (0, _styledComponents.default)(_Text.default)`
  ${_device.device.below.tabletLandscape`font-size: 80px;`};
`;
const DefSmall = (0, _styledComponents.default)(_Text.default)`
  margin-top: 50px;
  ${_device.device.below.tabletLandscape`margin-top: 20px;`};
`;
const Content = _styledComponents.default.div`
  max-width: 500px;
  padding: 0 25px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 32px;
  text-align: justify;
  font-weight: 300;

  ${_device.device.below.tabletLandscape`
    margin-bottom: 250px;
    text-align: left;
  `};

  & p {
    margin-bottom: 2em;
  }
`;
const UltimateVideo = (0, _styledComponents.default)(({
  className,
  ...rest
}) => React.createElement("amp-video", _extends({
  poster: "/static/intro/poster.png",
  loop: "loop",
  class: className
}, rest)))`
  flex: auto;
  margin: 0 -100px;
  > video[playsinline][class] {
    position: static;
    object-fit: cover;
    z-index: -1000;
  }
`;
const UltimateVideoContainer = _styledComponents.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  pointer-events: none;
  overflow: hidden;
`;

class Intro extends React.Component {
  render() {
    return React.createElement(IntroSection, null, React.createElement(UltimateVideoContainer, null, React.createElement(UltimateVideo, {
      autoplay: "",
      id: "bgVid",
      layout: "flex-item",
      width: "100vw",
      height: "100vh"
    }, React.createElement("source", {
      src: "/static/background.mp4",
      type: "video/mp4"
    }), React.createElement("div", {
      fallback: ""
    }, React.createElement("p", null, "This browser does not support the video element.")))), React.createElement(_Container.default, null, React.createElement(Author, null, "An article by the AMP team"), React.createElement(_Hero.default, null), React.createElement(CalloutContainer, null, React.createElement(Callout, {
      id: "calloutFadeOut"
    }, React.createElement(_PositionObserver.default, {
      id: "testElemObserver",
      "instersection-ratios": "0.5",
      on: "scroll:calloutAnim.seekTo(percent=event.percent)"
    }), React.createElement(_Animation.default, {
      id: "calloutAnim",
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: '#calloutFadeOut',
          keyframes: [{
            opacity: 0,
            transform: 'translate(0, 0)',
            offset: 0
          }, {
            opacity: 1,
            transform: 'translate(0, 180px)',
            offset: 1
          }]
        }]
      }
    }), "The generation that\u2019s criticized in the media daily. But this generation are changing the status quo that previous generations swore by.")), React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        right: -16,
        top: '15vh',
        width: 355,
        height: 33,
        overflow: 'hidden'
      }
    }, React.createElement(RectAnim, {
      src: "/static/rectangle-anim1.svg",
      width: "355",
      height: "33",
      style: {
        right: '-100px',
        top: 0
      }
    }))), React.createElement(Definition, null, React.createElement(_Text.default, {
      size: "22px",
      height: "25px"
    }, "Definition"), React.createElement(DefBig, {
      size: "120px"
    }, "25-35", React.createElement("br", null), "yrs old"), React.createElement(DefSmall, {
      height: "19px"
    }, "Anyone born between", React.createElement("br", null), "1980 and 1994"), React.createElement(_Confetti.default, {
      color: "white",
      pieces: _Confetti.presets.basic,
      style: {
        position: 'absolute',
        left: 320,
        top: -100
      }
    }))), React.createElement(_Container.default, {
      style: {
        marginTop: '130px',
        position: 'relative'
      }
    }, React.createElement(Content, null, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."), React.createElement("p", null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat.")), React.createElement(_Hidable.default, {
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(_Confetti.default, {
      pieces: [{
        type: 'square',
        size: 26,
        left: 0,
        top: 0,
        thickness: 1,
        color: 'aquamarine',
        angle: 45,
        rotate: 23
      }],
      style: {
        position: 'absolute',
        top: '-150px',
        right: '30%'
      }
    }), React.createElement(_Confetti.default, {
      pieces: [{
        type: 'circle',
        size: 26,
        left: 0,
        top: 0,
        thickness: 1,
        color: 'flushOrange',
        angle: 90
      }],
      style: {
        position: 'absolute',
        top: '40%',
        right: '20%'
      }
    }), React.createElement(_Confetti.default, {
      pieces: [{
        type: 'circle',
        size: 9,
        left: 0,
        top: 0,
        fill: true,
        color: 'electricViolet',
        angle: -45
      }],
      style: {
        position: 'absolute',
        bottom: '20%',
        left: '27%'
      }
    }), React.createElement(RectAnim, {
      src: "/static/rectangle-anim2.svg",
      width: "361",
      height: "21",
      style: {
        left: '0px',
        top: '12vh'
      }
    }), React.createElement(RectAnim, {
      src: "/static/rectangle-anim3.svg",
      width: "269",
      height: "22",
      style: {
        right: '0px',
        top: '45vh'
      }
    })), React.createElement(_Hidable.default, {
      hideFor: _device.device.above.tabletLandscape,
      style: {
        position: 'relative'
      }
    }, React.createElement(RectAnim, {
      src: "/static/rectangle-anim3.svg",
      width: "269",
      height: "22",
      style: {
        right: '0px',
        bottom: '40px'
      }
    }), React.createElement(_Shape.default.Circle, {
      color: "flushOrange",
      size: "26px",
      style: {
        position: 'absolute',
        bottom: '150px',
        left: '44%'
      }
    }))), React.createElement(_Graph.default, null));
  }

}

var _default = Intro;
exports.default = _default;