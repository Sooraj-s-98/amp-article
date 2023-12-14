"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

var _AmpCarousel = _interopRequireDefault(require("../../../../amp/AmpCarousel"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _SpacedContent = _interopRequireDefault(require("../../../../base/SpacedContent"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const CarouselContainer = _styledComponents.default.div`
  margin: 160px auto;
  position: relative;
  text-align: center;

  & amp-img > img {
    object-fit: contain;
  }

  & .amp-carousel-button {
    position: absolute;
    top: auto;
    right: auto;
    left: 10px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background: transparent;
    background-size: 50px;

    &.amp-disabled {
      opacity: 1;
      visibility: visible;
    }

    &.amp-carousel-button-next {
      left: calc(45% - 8.333%);
      transform: translateX(-100%);
      background: url('/static/sleep/arrow-right.svg');

      &.amp-disabled {
        background: url('/static/sleep/arrow-right-disabled.svg');
      }

      ${_device.device.below.tabletLandscape`
        left: 50%;
        transform: translateX(25%);
      `}
    }

    &.amp-carousel-button-prev {
      left: calc(45% - 8.333%);
      transform: translateX(-240%);
      background: url('/static/sleep/arrow-left.svg');

      &.amp-disabled {
        background: url('/static/sleep/arrow-left-disabled.svg');
      }

      ${_device.device.below.tabletLandscape`
        left: 50%;
        transform: translateX(-125%);
      `}
    }
  }
`;
const Slide = _styledComponents.default.div`
  display: flex;
  flex-direction: row;

  ${_device.device.below.tabletLandscape`
    flex-direction: column-reverse;
  `}
`;
const CarouselContent = _styledComponents.default.div`
  width: 45%;
  margin: 0 8.333% 0 0;
  align-items: center;
  justify-content: center;
  text-align: right;

  ${_device.device.below.tabletLandscape`
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    padding-bottom: 70px;
    text-align: center;
  `}
`;
CarouselContent.Col = _styledComponents.default.div`
  padding: 0 20px;
`;
const Accent = (0, _styledComponents.default)(_Text.default.Accent)`
  font-size: 120px;

  ${_device.device.below.tabletLandscape`
    font-size: 60px;
  `}
`;

class Slide1 extends React.Component {
  render() {
    return React.createElement(Slide, null, React.createElement(CarouselContent, null, React.createElement(_MobilePadding.default, null, React.createElement(_SpacedContent.default, {
      f: 4,
      header: true,
      footer: true
    }, React.createElement(Accent, {
      style: {
        color: '#fff'
      }
    }, "33%"), React.createElement(_Text.default.Carousel, {
      style: {
        color: '#fff'
      }
    }, "millenials sleep with their smartphone within reach")))), React.createElement(_AmpImage.default, {
      width: "495",
      height: "635",
      layout: "intrinsic",
      src: "/static/sleep/bed1@2x.png"
    }));
  }

}

class Slide2 extends React.Component {
  render() {
    return React.createElement(Slide, null, React.createElement(CarouselContent, null, React.createElement(_MobilePadding.default, null, React.createElement(_SpacedContent.default, {
      f: 4,
      header: true,
      footer: true
    }, React.createElement(Accent, {
      style: {
        color: '#fff'
      }
    }, "50%"), React.createElement(_Text.default.Carousel, {
      style: {
        color: '#fff'
      }
    }, "admit to restless sleep the night before")))), React.createElement(_AmpImage.default, {
      width: "495",
      height: "635",
      layout: "intrinsic",
      src: "/static/sleep/bed2@2x.png"
    }));
  }

}

class SleepCarousel extends React.Component {
  render() {
    return React.createElement(CarouselContainer, {
      style: this.props.style
    }, React.createElement(_AmpCarousel.default, {
      id: "sleepCarouselLarge",
      width: "900",
      height: "663",
      layout: "intrinsic",
      type: "slides",
      controls: true,
      hideFor: _device.device.below.tabletLandscape,
      on: "slideChange:AMP.setState({sleepCarousel: {index: event.index}})"
    }, React.createElement(Slide1, null), React.createElement(Slide2, null), React.createElement(Slide1, null), React.createElement(Slide2, null)), React.createElement(_AmpCarousel.default, {
      id: "sleepCarouselSmall",
      width: "375",
      height: "700",
      layout: "fixed",
      type: "slides",
      controls: true,
      hideFor: _device.device.above.tabletLandscape
    }, React.createElement(Slide1, null), React.createElement(Slide2, null), React.createElement(Slide1, null), React.createElement(Slide2, null)));
  }

}

var _default = SleepCarousel;
exports.default = _default;