"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const IntroContainer = _styledComponents.default.div`
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${({
  theme
}) => theme.colors.carnationPink} 0%,
    ${({
  theme
}) => theme.colors.mirage} 100%
  );
  margin-top: -10vh;
  position: relative;
  z-index: 1;
`;
const Content = _styledComponents.default.div`
  position: absolute;
  bottom: 10vh;
  width: 100%;
  text-align: center;
`;

class SleepIntro extends React.Component {
  render() {
    return React.createElement(IntroContainer, {
      style: this.props.style
    }, React.createElement(Content, null, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translate(-170%, -40%)'
      }
    }), React.createElement(_AmpImage.default, {
      src: "/static/sleep/moon@2x.png",
      layout: "responsive",
      width: "230",
      height: "230",
      style: {
        maxWidth: '230px',
        margin: '0 auto',
        display: 'block'
      }
    }), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        position: 'absolute',
        top: '0',
        left: '55%',
        transform: 'translate(-7%, 6%) rotate(100deg)'
      }
    })));
  }

}

var _default = SleepIntro;
exports.default = _default;