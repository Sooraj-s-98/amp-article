"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _stringHash = _interopRequireDefault(require("string-hash"));

var _device = require("../../../../../util/device");

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _SpacedContent = _interopRequireDefault(require("../../../../base/SpacedContent"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const WorkAnimationWrapper = _styledComponents.default.div`
  margin: 0 auto;
  position: relative;
  height: 400vh;
  width: 761px;
  ${_device.device.below.tabletLandscape`
    left: 50%;
    transform: translateX(-50%);
  `};
`;
const StatPercent = (0, _styledComponents.default)(_Text.default.Accent)`
  font-size: 120px;
  font-weight: 400;
`;
const TextClamp = _styledComponents.default.span`
  max-width: 190px;
  display: inline-block;
`;
const StatText = (0, _styledComponents.default)(_Text.default.P)`
  line-height: 24px;
  text-align: right;
`;
const StatContainer = _styledComponents.default.div`
  width: 240px;
  height: 200px;
  display: flex;
`;

const Stat = ({
  value,
  label,
  ...rest
}) => React.createElement(StatContainer, rest, React.createElement(_SpacedContent.default, {
  f: 3
}, React.createElement(StatPercent, {
  color: "flushOrange"
}, value), React.createElement(StatText, null, React.createElement(TextClamp, null, label))));

const StickyDiv = _styledComponents.default.div`
  position: sticky;
  top: ${({
  top
}) => top};
`;
const Wrapper = _styledComponents.default.div`
  position: absolute;
  ${({
  begin
}) => {
  if (!begin) {
    return _styledComponents.css`
        opacity: 0;
      `;
  }

  return '';
}}
`;
const CENTER_EXPR = '50vh ';
const TOTAL_HEIGHT_VH = 400;

const Item = ({
  children,
  src,
  width,
  height,
  left,
  top,
  start = 0,
  duration = 1,
  end,
  begin = start === 0
}) => {
  const offset = TOTAL_HEIGHT_VH * start;
  const bufferSize = TOTAL_HEIGHT_VH * duration;
  const id = `work-${(0, _stringHash.default)(`${src}${start}${top}`)}`;
  const keyframes = [];

  if (begin) {
    keyframes.push({
      offset: 0,
      opacity: 1
    });
  } else {
    keyframes.push({
      offset: 0,
      opacity: 0
    }, {
      offset: 0.35,
      opacity: 0
    });
  }

  keyframes.push({
    offset: 0.5,
    opacity: 1
  }, {
    offset: 0.85,
    opacity: 1
  });

  if (end) {
    keyframes.push({
      offset: 1,
      opacity: 1
    });
  } else {
    keyframes.push({
      offset: 0.9,
      opacity: 0
    }, {
      offset: 1,
      opacity: 0
    });
  }

  return React.createElement(Wrapper, {
    id: id,
    style: {
      top: `calc(${top}px + ${offset}vh)`,
      left,
      width,
      height: end ? 'auto' : `calc(${bufferSize}vh + ${height}px)`,
      bottom: end ? `calc(283px - ${height + top}px)` : 'auto'
    }
  }, React.createElement(_PositionObserver.default, {
    id: `${id}-observer`,
    "instersection-ratios": "1",
    on: `scroll:${id}-anim.seekTo(percent=event.percent)`
  }), React.createElement(_Animation.default, {
    id: `${id}-anim`,
    animation: {
      duration: '1',
      fill: 'both',
      direction: 'normal',
      animations: [{
        selector: `#${id}`,
        keyframes: keyframes
      }]
    }
  }), React.createElement(StickyDiv, {
    top: `calc(${CENTER_EXPR} + ${top}px)`
  }, children));
};

const ImageItem = ({
  src,
  width,
  height,
  ...rest
}) => React.createElement(Item, _extends({
  width: width,
  height: height
}, rest), React.createElement("amp-img", {
  layout: "fixed",
  width: width,
  height: height,
  src: src
}));

const StatItem = ({
  value,
  label,
  ...rest
}) => React.createElement(Item, _extends({}, rest, {
  width: 240,
  height: 200
}), React.createElement(Stat, {
  value: value,
  label: label
}));

class WorkAnimation extends React.Component {
  render() {
    return React.createElement(WorkAnimationWrapper, null, React.createElement(StickyDiv, {
      top: `calc(${CENTER_EXPR})`
    }, React.createElement("amp-img", {
      layout: "fixed",
      width: "761",
      height: "283",
      src: "/static/work/anim/base@2x.png"
    })), React.createElement("div", {
      style: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: 0,
        right: 0
      }
    }, React.createElement(StatItem, {
      begin: true,
      left: 620,
      top: -200,
      value: "43%",
      label: "plan to leave their jobs within two years",
      duration: 0.3
    }), React.createElement(StatItem, {
      left: 620,
      top: -200,
      value: "62%",
      label: "have considered starting their own business",
      start: 0.3,
      duration: 0.3
    }), React.createElement(StatItem, {
      start: 0.6,
      end: true,
      left: 620,
      top: -200,
      value: "50%",
      label: "are okay telecomuting some of the time"
    }), React.createElement(ImageItem, {
      top: -290,
      left: 290,
      width: 281,
      height: 344,
      src: "/static/work/anim/womansit@2x.png",
      duration: 0.5
    }), React.createElement(ImageItem, {
      top: -290,
      left: 290,
      width: 281,
      height: 344,
      src: "/static/work/anim/womanphone@2x.png",
      start: 0.5,
      duration: 0.5,
      end: true
    }), React.createElement(ImageItem, {
      top: -120,
      left: 100,
      width: 115,
      height: 166,
      src: "/static/work/anim/plant@2x.png",
      duration: 0.35
    }), React.createElement(ImageItem, {
      top: 15,
      left: 120,
      width: 78,
      height: 48,
      src: "/static/work/anim/mug@2x.png",
      duration: 0.355
    }), React.createElement(ImageItem, {
      top: 15,
      left: 120,
      width: 51,
      height: 50,
      src: "/static/work/anim/ball@2x.png",
      duration: 0.352
    }), React.createElement(ImageItem, {
      top: 0,
      left: 60,
      width: 195,
      height: 62,
      src: "/static/work/anim/books2@2x.png",
      start: 0.4,
      end: true
    }), React.createElement(ImageItem, {
      top: -15,
      left: 125,
      width: 78,
      height: 48,
      src: "/static/work/anim/mug@2x.png",
      start: 0.4,
      end: true
    }), React.createElement(ImageItem, {
      top: -20,
      left: 125,
      width: 51,
      height: 50,
      src: "/static/work/anim/ball@2x.png",
      start: 0.4,
      end: true
    }), React.createElement(ImageItem, {
      top: -255,
      left: 250,
      width: 140,
      height: 153,
      src: "/static/work/anim/chat-bubbles@2x.png",
      duration: 0.3
    }), React.createElement(ImageItem, {
      start: 0.2,
      top: -295,
      left: 180,
      width: 180,
      height: 208,
      src: "/static/work/anim/idea-bubble@2x.png",
      start: 0.3,
      duration: 0.3
    }), React.createElement(ImageItem, {
      start: 0.5,
      top: -305,
      left: 220,
      width: 119,
      height: 168,
      src: "/static/work/anim/notifications@2x.png",
      start: 0.6,
      duration: 0.3,
      end: true
    }), React.createElement(ImageItem, {
      top: 40,
      left: 225,
      width: 234,
      height: 57,
      src: "/static/work/anim/laptopclosed@2x.png",
      start: 0.6,
      end: true
    }), React.createElement(ImageItem, {
      top: -20,
      left: 190,
      width: 257,
      height: 113,
      src: "/static/work/anim/laptopopen@2x.png",
      start: 0.4,
      duration: 0.2
    }), React.createElement(ImageItem, {
      top: 55,
      left: 420,
      width: 246,
      height: 73,
      src: "/static/work/anim/books@2x.png",
      duration: 0.5
    }), React.createElement(ImageItem, {
      top: -80,
      left: 200,
      width: 179,
      height: 181,
      src: "/static/work/anim/desktop@2x.png",
      duration: 0.345
    }), React.createElement(ImageItem, {
      top: 55,
      left: 540,
      width: 67,
      height: 44,
      src: "/static/work/anim/mug2@2x.png",
      duration: 0.5
    }), React.createElement(ImageItem, {
      top: -20,
      left: 520,
      width: 115,
      height: 166,
      src: "/static/work/anim/plant@2x.png",
      start: 0.5,
      end: true
    }), React.createElement(ImageItem, {
      top: 115,
      left: 520,
      width: 78,
      height: 48,
      src: "/static/work/anim/mug@2x.png",
      start: 0.5,
      end: true
    }), React.createElement(ImageItem, {
      top: 115,
      left: 520,
      width: 51,
      height: 50,
      src: "/static/work/anim/ball@2x.png",
      start: 0.5,
      end: true
    }), React.createElement(ImageItem, {
      top: 135,
      left: 520,
      width: 91,
      height: 34,
      src: "/static/work/anim/phone@2x.png",
      duration: 0.335
    })));
  }

}

exports.default = WorkAnimation;