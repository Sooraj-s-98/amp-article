"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

var _Grid = _interopRequireDefault(require("../../../../base/Grid"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CommentsSection = _styledComponents.default.section`
  padding: 358px 0 220px;
  background: ${({
  theme
}) => theme.colors.black};
  color: ${({
  theme
}) => theme.colors.white};
`;
const Header = (0, _styledComponents.default)(_Text.default.Title)`
  ${_device.device.below.tabletLandscape`
    margin: 0 0 180px 0;
  `};
`;
const CommentSectionHeaderIcon = _styledComponents.default.div`
  position: relative;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
`;
const CommentSectionHeaderContainer = _styledComponents.default.header`
  padding: 64px 0 64px;
  margin-left: -40px;
`;
const CommentAccordian = (0, _styledComponents.default)(({
  className,
  ...rest
}) => React.createElement("amp-accordion", _extends({
  class: className
}, rest)))`
  margin-top: 100px;
  /* AMP HACK! */
  ${CommentSectionHeaderContainer} {
    background: transparent;
    border: none;
  }
`;
const Comment = _styledComponents.default.section`
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  &:first-child {
    border-top: none;
  }
`;
const CommentContent = _styledComponents.default.div`
  margin-bottom: 64px;
`;
const TitleConfetti = (0, _styledComponents.default)(_Confetti.default)`
  position: absolute;
  left: 800px;
  top: 250px;
  ${_device.device.below.tabletLandscape`
      left: 50%;
      top: auto;
      bottom: 0;
      transform: translate(-50%, 100%);
  `};
`;
const GuyImage = _styledComponents.default.div`
  position: absolute;
  top: -0.7em;
  right: -0.5em;
  transform: translate(0, 0) rotate(0deg);
  width: 184px;
  ${_device.device.below.tabletPortrait`
      width: 92px;
  `};
`;

class CommentSectionHeader extends React.Component {
  render() {
    return React.createElement(CommentSectionHeaderContainer, null, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(CommentSectionHeaderIcon, null, this.props.icon), React.createElement("div", {
      style: {
        flex: 'auto'
      }
    }, React.createElement(_Text.default, {
      size: "40px"
    }, this.props.title), React.createElement(_Text.default.P, null, this.props.label))));
  }

}

class GuyAnimation extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(_PositionObserver.default, {
      "instersection-ratios": "1",
      on: "scroll:guyAloneAnim.seekTo(percent=event.percent)"
    }), React.createElement(_Animation.default, {
      id: "guyAloneAnim",
      animation: {
        duration: 1,
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: '#guy_alone',
          switch: [{
            media: '(min-width: 600px)',
            keyframes: [{
              offset: 0,
              transform: 'translate(-.8em,-575px) rotate(0deg)'
            }, {
              offset: 0.2,
              transform: 'translate(-.8em,-575px) rotate(0deg)'
            }, {
              offset: 0.5,
              transform: 'translate(-.8em,-1.35em) rotate(-55deg)'
            }, {
              offset: 0.6,
              transform: 'translate(-.2em,-1.4em) rotate(15deg)'
            }, {
              offset: 0.8,
              transform: 'translate(0,0) rotate(0deg)'
            }, {
              offset: 1,
              transform: 'translate(0,0) rotate(0deg)'
            }]
          }, {
            media: '(max-width: 599px)',
            keyframes: [{
              offset: 0,
              transform: 'translate(-.96em,-472px) rotate(0deg)'
            }, {
              offset: 0.5,
              transform: 'translate(-1em,-1.2em) rotate(-55deg)'
            }, {
              offset: 0.6,
              transform: 'translate(-.2em,-1.4em) rotate(15deg)'
            }, {
              offset: 0.8,
              transform: 'translate(-6px,6px) rotate(0deg)'
            }, {
              offset: 1,
              transform: 'translate(-6px,6px) rotate(0deg)'
            }]
          }]
        }]
      }
    }));
  }

}

class Comments extends React.Component {
  render() {
    return React.createElement(CommentsSection, null, React.createElement(GuyAnimation, null), React.createElement(_Container.default, null, React.createElement(_MobilePadding.default, null, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      cols: 8,
      offset: 2,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(Header, null, React.createElement("div", null, "WHAT"), React.createElement("div", {
      style: {
        display: 'inline-block',
        position: 'relative'
      }
    }, "OTHERS", React.createElement(GuyImage, {
      id: "guy_alone"
    }, React.createElement(_AmpImage.default, {
      src: "/static/comments/guy_alone@2x.png",
      width: "184",
      height: "231",
      layout: "intrinsic"
    }))), React.createElement("div", null, "ARE SAYING"), React.createElement(TitleConfetti, {
      pieces: _Confetti.presets.basic,
      color: "white"
    })), React.createElement(CommentAccordian, null, React.createElement(Comment, {
      expanded: true
    }, React.createElement(CommentSectionHeader, {
      title: "On YouTube",
      label: "Latest youtube video about Millennials",
      icon: React.createElement("div", null, React.createElement(_Confetti.default, {
        pieces: _Confetti.presets.tiny,
        color: "youtubeRed",
        style: {
          position: 'absolute',
          left: 10,
          top: -30
        }
      }), React.createElement("amp-img", {
        layout: "fixed",
        width: "78",
        height: "55",
        src: "/static/comments/youtube@2x.png"
      }))
    }), React.createElement(CommentContent, null, React.createElement("amp-youtube", {
      layout: "responsive",
      width: "16",
      height: "9",
      "data-videoid": "kaCQ-giZOxg"
    }))), React.createElement(Comment, null, React.createElement(CommentSectionHeader, {
      title: "On Twitter",
      label: React.createElement("div", null, "Expand to see recent", ' ', React.createElement("a", {
        href: "http://www.google.com"
      }, "#millenials"), " tweets"),
      icon: React.createElement("div", null, React.createElement(_Confetti.default, {
        pieces: _Confetti.presets.tiny,
        color: "twitterBlue",
        style: {
          position: 'absolute',
          right: 0,
          top: -30,
          transform: 'rotate(50deg)'
        }
      }), React.createElement("amp-img", {
        layout: "fixed",
        width: "65.52",
        height: "53.54",
        src: "/static/comments/twitter@2x.png"
      }))
    }), React.createElement(CommentContent, null, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-twitter", {
      width: "375",
      height: "472",
      layout: "responsive",
      "data-tweetid": "1065035618516942848"
    })), React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-twitter", {
      width: "375",
      height: "472",
      layout: "responsive",
      "data-tweetid": "1063428413481017344"
    })), React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-twitter", {
      width: "375",
      height: "472",
      layout: "responsive",
      "data-tweetid": "1061146437013135361"
    })), React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-twitter", {
      width: "375",
      height: "472",
      layout: "responsive",
      "data-tweetid": "1060505969095000066"
    }))))), React.createElement(Comment, null, React.createElement(CommentSectionHeader, {
      title: "On Instagram",
      label: "Expand to see some instagram post",
      icon: React.createElement("div", null, React.createElement(_Confetti.default, {
        pieces: _Confetti.presets.tiny,
        style: {
          position: 'absolute',
          left: 40,
          top: -20,
          transform: 'rotate(0deg)'
        },
        color: "instaOrange"
      }), React.createElement("amp-img", {
        layout: "fixed",
        width: "67.68",
        height: "67.46",
        src: "/static/comments/insta@2x.png"
      }))
    }), React.createElement(CommentContent, null, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-instagram", {
      "data-shortcode": "BqpiGv-n-ci",
      width: "1",
      height: "1",
      layout: "responsive"
    })), React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-instagram", {
      "data-shortcode": "BqnAOdnhE0k",
      width: "1",
      height: "1",
      layout: "responsive"
    })), React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-instagram", {
      "data-shortcode": "Bmvokc2AwaU",
      width: "1",
      height: "1",
      layout: "responsive"
    })), React.createElement(_Grid.default.Col, {
      cols: 6,
      colsAtTabletPortrait: 12
    }, React.createElement("amp-instagram", {
      "data-shortcode": "BhpWgCjhSgi",
      width: "1",
      height: "1",
      layout: "responsive"
    })))))))))));
  }

}

var _default = Comments;
exports.default = _default;