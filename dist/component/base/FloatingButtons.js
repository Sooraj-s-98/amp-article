"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _device = require("../../util/device");

var _handleAmpBindClassName = require("../../util/handleAmpBindClassName");

var _Button = _interopRequireDefault(require("./Button"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Animation = _interopRequireDefault(require("../amp/Animation"));

var _AmpSocialShare = _interopRequireDefault(require("../amp/AmpSocialShare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const FloatingContainer = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['hideFor'], props);
  return React.createElement("div", (0, _handleAmpBindClassName.handleAmpBindClassName)(realProps));
})`
  ${({
  hideFor
}) => hideFor ? hideFor`display: none;` : ''};
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  z-index: 10;
`;
const ShareContainer = (0, _styledComponents.default)(props => {
  return React.createElement("div", (0, _handleAmpBindClassName.handleAmpBindClassName)(props));
})`
  z-index: 2;

  &.closed amp-social-share {
    opacity: 0;
  }

  &.closed .openContent {
    opacity: 0;
  }

  &:not(.closed) .closedContent {
    opacity: 0;
  }

  &:not(.closed) .share-1 {
    transform: translate(-50%, calc(-100% - 10px));
  }
  &:not(.closed) .share-2 {
    transform: translate(-50%, calc(-200% - 20px));
  }
  &:not(.closed) .share-3 {
    transform: translate(-50%, calc(-300% - 30px));
  }

  & amp-social-share {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
const ToggleButton = (0, _styledComponents.default)(_Button.default.White)`
  z-index: 2;

  & > div {
    transition: opacity 0.25s ease-out;
    display: flex;
    align-items: center;

    &:first-child {
      position: absolute;
    }
  }
`;
const BackToTopButton = (0, _styledComponents.default)(_Button.default.White)`
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

class FloatingButtons extends React.Component {
  render() {
    return React.createElement(FloatingContainer, {
      hideFor: _device.device.below.tabletPortrait,
      "data-amp-bind-class": `
          scrollToTopVisible == true ? "scrollBtnVisible" : ""
        `
    }, React.createElement(ShareContainer, {
      id: "shareContainer",
      className: "closed",
      "data-amp-bind-class": `
            shareButtonsOpen == true ? "" : "closed"
          `
    }, React.createElement(ToggleButton, {
      on: "tap:AMP.setState({shareButtonsOpen: !shareButtonsOpen})"
    }, React.createElement("div", {
      className: "closedContent"
    }, React.createElement("amp-img", {
      layout: "fixed",
      width: "16",
      height: "23",
      src: "/static/icons/arrow-right-curve.svg"
    }), React.createElement("div", {
      style: {
        paddingLeft: '10px'
      }
    }, "Share")), React.createElement("div", {
      className: "openContent"
    }, React.createElement(_Icon.default, {
      name: "x",
      size: 24,
      style: {
        marginRight: '10px'
      }
    }), React.createElement("div", null, "Close"))), React.createElement(_AmpSocialShare.default.Email, {
      className: "share-1",
      width: "56",
      height: "56"
    }), React.createElement(_AmpSocialShare.default.Twitter, {
      className: "share-2",
      width: "56",
      height: "56"
    }), React.createElement(_AmpSocialShare.default.Facebook, {
      className: "share-3",
      width: "56",
      height: "56"
    })), React.createElement(_Animation.default, {
      id: "showScrollToTopAnim",
      animation: {
        duration: '200ms',
        fill: 'both',
        iterations: '1',
        direction: 'alternate',
        animations: [{
          selector: '#scrollToTopButton',
          keyframes: [{
            opacity: '1',
            visibility: 'visible'
          }]
        }, {
          selector: '#shareContainer',
          keyframes: [{
            transform: 'translateX(-70px)'
          }]
        }]
      }
    }), React.createElement(_Animation.default, {
      id: "hideScrollToTopAnim",
      animation: {
        duration: '200ms',
        fill: 'both',
        iterations: '1',
        direction: 'alternate',
        animations: [{
          selector: '#scrollToTopButton',
          keyframes: [{
            opacity: '0',
            visibility: 'hidden'
          }]
        }, {
          selector: '#shareContainer',
          keyframes: [{
            transform: 'translateX(0px)'
          }]
        }]
      }
    }), React.createElement(BackToTopButton, {
      id: "scrollToTopButton",
      on: "tap:page-top.scrollTo(duration=200)",
      className: "scrollToTop"
    }, React.createElement(_Icon.default, {
      name: "arrow-up",
      size: 24
    })));
  }

}

var _default = FloatingButtons;
exports.default = _default;