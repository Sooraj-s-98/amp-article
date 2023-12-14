"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * DEPRECATED
 * Carousel example
 */
const CarouselContainer = _styledComponents.default.div`
  margin: 160px 0;
`;
const Slide = _styledComponents.default.div`
  padding: 0 12px;
`;
const CarouselContent = _styledComponents.default.div`
  display: flex;
  padding: 40px 0px 0 0;
  align-items: center;
  justify-content: center;
`;
CarouselContent.Col = _styledComponents.default.div`
  padding: 0 20px;
`;
const SpacerCol = _styledComponents.default.div`
  width: 25%;
`;

class Slide1 extends React.Component {
  render() {
    return React.createElement(Slide, null, React.createElement("amp-img", {
      width: "583",
      height: "371",
      layout: "fixed",
      src: "/static/work/slide1.svg"
    }), React.createElement(CarouselContent, null, React.createElement(CarouselContent.Col, null, React.createElement(_Text.default.Accent, {
      color: "flushOrange"
    }, "43%")), React.createElement(CarouselContent.Col, null, React.createElement(_Text.default, {
      color: "flushOrange"
    }, "plan to leave their job", React.createElement("br", null), "within two years"))));
  }

}

class Slide2 extends React.Component {
  render() {
    return React.createElement(Slide, null, React.createElement("amp-img", {
      width: "405",
      height: "367",
      layout: "fixed",
      src: "/static/work/slide2.svg"
    }), React.createElement(CarouselContent, null, React.createElement(CarouselContent.Col, null, React.createElement(_Text.default.Accent, {
      color: "flushOrange"
    }, "30%")), React.createElement(CarouselContent.Col, null, React.createElement(_Text.default, {
      color: "flushOrange"
    }, "plan to leave their job", React.createElement("br", null), "within two years"))));
  }

}

class WorkCarousel extends React.Component {
  render() {
    return React.createElement(CarouselContainer, null, React.createElement("amp-carousel", {
      height: "600",
      layout: "fixed-height",
      type: "carousel"
    }, React.createElement(SpacerCol, null), React.createElement(Slide1, null), React.createElement(Slide2, null), React.createElement(Slide1, null), React.createElement(Slide2, null), React.createElement(SpacerCol, null)));
  }

}

var _default = WorkCarousel;
exports.default = _default;