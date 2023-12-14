"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ramda = require("ramda");

var _device = require("../../util/device");

var _AmpImage = _interopRequireDefault(require("../amp/AmpImage"));

var _AmpSocialShare = _interopRequireDefault(require("../amp/AmpSocialShare"));

var _Text = _interopRequireDefault(require("./Text"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _MobilePadding = _interopRequireDefault(require("./MobilePadding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const titleToId = title => `lbox-${title.toLowerCase().replace(/\s/g, '-')}`;

const LightboxLinkContainer = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['title', 'bgColor', 'cardImgSrc', 'cardImgWidth', 'cardImgHeight', 'innerImgSrc', 'innerImgWidth', 'innerImgHeight'], props);
  return React.createElement("button", _extends({}, realProps, {
    on: `tap:${titleToId(props.title)}`
  }));
})`
  position: relative;
  margin: 0 36px 72px 36px;
`;
const Card = _styledComponents.default.div`
  position: relative;
  font-size: ${({
  size
}) => size ? size : '16px'};
  background: #fff;
  border-radius: 10px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const CardShadow = _styledComponents.default.div`
  position: absolute;
  z-index: 0;
  right: -10px;
  bottom: -10px;
  width: 224px;
  height: 264px;
  background: url(/static/food/card-shadow.png) no-repeat;
  background-size: cover;
`;
const Top = _styledComponents.default.div`
  width: 220px;
  height: 170px;
  background-color: ${({
  theme,
  bgColor
}) => theme.colors[bgColor]};
  background-image: url(/static/food/inner_grain_crop@2x.png);
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 2px solid #000;
  cursor: pointer;

  & amp-img > img {
    object-fit: contain;
  }
`;
const slide = _styledComponents.keyframes`
  0% {
      transform: translateY(40px);
    }
    100% {
      transform: translateY(0px);
    }
`;
const LightboxContainer = _styledComponents.default.div`
  background: #fff;
  max-width: 90%;
  width: 980px;
  display: flex;
  max-height: 90%;
  box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.1);
  transition: all 1.5s ease-out;
  animation: ${slide} 0.5s 1;
  animation-fill-mode: forwards;

  ${_device.device.below.tabletLandscape`
    flex-direction: column;
  `}
`;
const BoxLeft = _styledComponents.default.div`
  width: 45%;
  background-color: ${({
  theme,
  bgColor
}) => theme.colors[bgColor]};
  background-image: url(/static/food/inner_grain_crop@2x.png);
  background-position: center 1px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${_device.device.below.tabletLandscape`
    width: 100%;
    height: 50%;
    height: 335px;
  `}
`;
const fadeIn = _styledComponents.keyframes`
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;
const BoxRight = _styledComponents.default.div`
  width: 55%;
  text-align: left;
  padding: 40px 60px;
  opacity: 0;
  animation: ${fadeIn} 0.5s 1;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;

  ${_device.device.below.tabletLandscape`
    width: 100%;
    max-height: 400px;
    overflow: scroll;
    padding: 20px 0;
  `}
`;
const CloseBtn = _styledComponents.default.div`
  text-align: right;
  ${_device.device.below.tabletLandscape`
    float: right;
  `}
`;
const Icons = _styledComponents.default.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  ${_device.device.below.tabletLandscape`
    bottom: 3px;
  `}
`;
const Thingy = _styledComponents.default.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Lightbox extends React.Component {
  render() {
    return React.createElement("amp-lightbox", {
      id: this.props.id,
      layout: "nodisplay"
    }, React.createElement(Thingy, {
      tabIndex: "0",
      role: "button"
    }, React.createElement(LightboxContainer, null, React.createElement(BoxLeft, {
      bgColor: this.props.bgColor
    }, React.createElement(_AmpImage.default, {
      layout: "intrinsic",
      src: this.props.cardImgSrc,
      width: this.props.cardImgWidth,
      height: this.props.cardImgHeight
    }), React.createElement(Icons, null, React.createElement(_AmpSocialShare.default.Facebook, {
      outline: true,
      width: "56",
      height: "56",
      style: {
        marginRight: '10px'
      }
    }), React.createElement(_AmpSocialShare.default.Twitter, {
      outline: true,
      width: "56",
      height: "56"
    }))), React.createElement(BoxRight, null, React.createElement(_MobilePadding.default, null, React.createElement(CloseBtn, null, React.createElement("span", {
      on: `tap:${this.props.id}.close`,
      tabIndex: "0",
      role: "button",
      style: {
        cursor: 'pointer'
      }
    }, React.createElement(_Icon.default, {
      name: "x",
      size: "32"
    }))), React.createElement(_Text.default.AccentSmall, null, this.props.title), React.createElement(_Text.default.P, {
      style: {
        textAlign: 'left',
        paddingTop: '50px'
      }
    }, this.props.children))))));
  }

}

const SpookyItem = _styledComponents.default.div`
  height: 90px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

class LightboxLink extends React.Component {
  render() {
    return React.createElement(LightboxLinkContainer, this.props, React.createElement(CardShadow, null), React.createElement(Card, null, React.createElement(Top, {
      bgColor: this.props.bgColor
    }, React.createElement(_AmpImage.default, {
      layout: "responsive",
      src: this.props.cardImgSrc,
      width: this.props.cardImgWidth,
      height: this.props.cardImgHeight,
      style: {
        maxHeight: '100%'
      }
    })), React.createElement(SpookyItem, null, React.createElement(_Text.default, {
      size: "18px",
      weight: "bold"
    }, this.props.title), React.createElement(_AmpImage.default, {
      layout: "fixed",
      src: "/static/food/next-arrow.png",
      width: "32",
      height: "32"
    })), React.createElement(Lightbox, _extends({
      id: titleToId(this.props.title)
    }, this.props), this.props.children)));
  }

}

var _default = LightboxLink;
exports.default = _default;