"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _device = require("../../../../../util/device");

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Grid = _interopRequireDefault(require("../../../../base/Grid"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _Window = _interopRequireDefault(require("../../../../base/Window"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Animation = _interopRequireDefault(require("../../../../amp/Animation"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const EducationSection = _styledComponents.default.section`
  background: ${({
  theme
}) => theme.colors.blueChalk};
  color: ${({
  theme
}) => theme.colors.purpleHeart};
`;
const Intro = _styledComponents.default.div`
  position: relative;
  margin: 220px 0 160px 0;
  ${_device.device.below.tabletLandscape`margin: 0;`};
`;
const StickyContainer = _styledComponents.default.div`
  height: 200vh;
`;
const StickyContent = _styledComponents.default.div`
  position: sticky;
  top: -30vh;
`;
const PerspectiveWrapper = _styledComponents.default.div`
  position: relative;
  perspective: 200px;
  perspective-origin: center bottom;
`;
const MainCircle = _styledComponents.default.div`
  background: ${({
  theme
}) => theme.colors.rose};
  border-radius: 50%;
  width: 637px;
  height: 637px;
  position: absolute;
  top: -200px;
  left: 10%;
  opacity: 0;
  overflow: hidden;
  ${_device.device.below.tabletLandscape`
    position: relative;
    top: auto
    left: 50%;
    transform: translateX(-50%);

    display: block;
  `}
`;
const Title = (0, _styledComponents.default)(_Text.default.Title)`
  padding-left: 47%;
  position: relative;
  z-index: 2;
  ${_device.device.below.tabletLandscape`
    padding: 0 25px;
    top: -0.35em;
  `};
`;
const ContentGridCol = (0, _styledComponents.default)(_Grid.default.Col)`
  text-align: justify;
  ${_device.device.below.tabletLandscape`text-align: left;`};
`;
const MobileFloatRight = _styledComponents.default.div`
  ${_device.device.below.tabletLandscape`
    float:right;
    margin-right: 30%;
    max-width: 220px;
  `};
  ${_device.device.below.tabletPortrait`margin-right: 25px;`};
`;
const ContentWrapper = (0, _styledComponents.default)(_MobilePadding.default)`
  padding-top: 100px;
  ${_device.device.below.tabletLandscape`padding-top: 0`};
`;
const GridBackground = _styledComponents.default.div`
  background: url('/static/education-bg-grid.svg');
`;
const Windows = _styledComponents.default.div`
  margin: 300px 0;
  height: 350px;
  position: relative;
  ${_device.device.below.tabletLandscape`height: 500px;`}
`;
const WindowHover = (0, _styledComponents.default)(props => {
  return React.createElement(_Window.default, (0, _ramda.omit)(['z'], props));
})`
  z-index: ${({
  z
}) => z ? z : '0'};
  transition: transform 0.2s ease-out;
  ${_device.device.below.tabletLandscape`zoom: 0.7;`}

  &:hover {
    z-index: 10;
    transform: translateY(-10px);
  }
`;
const WindowHover1 = (0, _styledComponents.default)(WindowHover)`
  position: absolute;
  top: 100px;
  left: 12.5%;
  ${_device.device.below.tabletLandscape`
    top: 100px;
    left: 2%;
  `};
`;
const WindowHover2 = (0, _styledComponents.default)(WindowHover)`
  position: absolute;
  top: -30px;
  left: 25%;
  ${_device.device.below.tabletLandscape`
    top: -410px;
    left: -15%;
  `};
`;
const WindowHover3 = (0, _styledComponents.default)(WindowHover)`
  position: absolute;
  top: 70px;
  left: 40%;
  ${_device.device.below.tabletLandscape`
    top: -215px;
    left: 40%;
  `};
`;
const WindowHover4 = (0, _styledComponents.default)(WindowHover)`
  position: absolute;
  top: -50%;
  right: -44%;
  text-align: center;
  z-index: 3;
  ${_device.device.below.tabletLandscape`
    top: -480px;
    right: 8%;
  `};
`;
const VideoWindowWrapper = _styledComponents.default.div`
  height: 700px;
  margin-top: 200px;
  position: relative;
`;
const VideoWindow1 = (0, _styledComponents.default)(_Window.default)`
  position: absolute;
  left: 26%;
  z-index: 2;
  ${_device.device.below.tabletLandscape`left: 12%;`};
  ${_device.device.below.tabletPortrait`left: 25px;`};
`;
const VideoWindow2 = (0, _styledComponents.default)(_Window.default)`
  position: absolute;
  left: 40%;
  top: -30px;
  z-index: 1;
  ${_device.device.below.tabletLandscape`left: 25%;`};
`;
const Break = _styledComponents.default.hr`
  border: 1px solid #979797;
  border-width: 1px 0 0 0;
  opacity: 0.1;
  margin: 25px 0;
`;
const CircleImage = (0, _styledComponents.default)(({
  className,
  ...rest
}) => React.createElement("amp-img", _extends({
  class: className
}, rest)))`
  &[layout='fixed'][width][height] {
    position: absolute;
  }
`;
const ContentStuff = _styledComponents.default.div`
  margin-top: 100px;
`;

class Education extends React.Component {
  render() {
    return React.createElement(EducationSection, null, React.createElement("div", null, React.createElement(StickyContainer, null, React.createElement(StickyContent, null, React.createElement(_Container.default, null, React.createElement(PerspectiveWrapper, null, React.createElement(_Confetti.default, {
      id: "eduConfetti",
      pieces: _Confetti.presets.largeMultiColor,
      style: {
        margin: '10px auto 30px'
      }
    }), React.createElement(Intro, null, React.createElement(MainCircle, {
      id: "eduCircle"
    }, React.createElement(CircleImage, {
      id: "eduImg1",
      src: "/static/education/1@2x.png",
      layout: "fixed",
      width: "209",
      height: "189",
      style: {
        bottom: '12%',
        left: '17%'
      }
    }), React.createElement(CircleImage, {
      id: "eduImg3",
      src: "/static/education/3@2x.png",
      layout: "fixed",
      width: "125",
      height: "213",
      style: {
        bottom: '14%',
        left: '54%'
      }
    }), React.createElement(CircleImage, {
      id: "eduImg2",
      src: "/static/education/2@2x.png",
      layout: "fixed",
      width: "257",
      height: "194",
      style: {
        bottom: '11%',
        left: '30%'
      }
    }), React.createElement(CircleImage, {
      id: "eduImg4",
      src: "/static/education/4@2x.png",
      layout: "fixed",
      width: "248",
      height: "206",
      style: {
        bottom: 0,
        left: 0
      }
    }), React.createElement(CircleImage, {
      id: "eduImg6",
      src: "/static/education/6@2x.png",
      layout: "fixed",
      width: "172",
      height: "184",
      style: {
        bottom: 0,
        left: '60%'
      }
    }), React.createElement(CircleImage, {
      id: "eduImg5",
      src: "/static/education/5@2x.png",
      layout: "fixed",
      width: "232",
      height: "170",
      style: {
        bottom: 0,
        left: '33%'
      }
    })), React.createElement(Title, {
      id: "eduTitle"
    }, "EDU-", React.createElement("br", null), "CATION")))))), React.createElement(_PositionObserver.default, {
      id: "eduIntroObs",
      "instersection-ratios": "0.5",
      on: "scroll:eduIntroAnim.seekTo(percent=event.percent)"
    }), React.createElement(_Animation.default, {
      id: "eduIntroAnim",
      animation: {
        duration: '1',
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: '#eduCircle',
          switch: [{
            media: '(max-width: 599px)',
            keyframes: [{
              transform: 'translate3d(-60%, 45%, 190px)',
              opacity: 0,
              offset: 0
            }, {
              transform: 'translate3d(-60%, 45%, 190px)',
              opacity: 0,
              offset: 0.01
            }, {
              transform: 'translate3d(-60%, 45%, 190px)',
              opacity: 1,
              offset: 0.011
            }, {
              transform: 'translate3d(-60%, 45%, 190px)',
              opacity: 1,
              offset: 0.3
            }, {
              transform: 'translate3d(0, 0, 0px)',
              opacity: 1,
              offset: 0.5
            }, {
              transform: 'translate3d(0, 0, 0px)',
              opacity: 1,
              offset: 1
            }]
          }, {
            media: '(min-width: 600px)',
            keyframes: [{
              transform: 'translate3d(40%, 35%, 190px)',
              opacity: 0,
              offset: 0
            }, {
              transform: 'translate3d(40%, 35%, 190px)',
              opacity: 1,
              offset: 0.00001
            }, {
              transform: 'translate3d(40%, 35%, 190px)',
              opacity: 1,
              offset: 0.3
            }, {
              transform: 'translate3d(0, 0, 0px)',
              opacity: 1,
              offset: 0.5
            }, {
              transform: 'translate3d(0, 0, 0px)',
              opacity: 1,
              offset: 1
            }]
          }]
        }, {
          selector: '#eduConfetti',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(-200px)'
          }, {
            opacity: 0,
            offset: 0.45,
            transform: 'translateY(-200px)'
          }, {
            opacity: 1,
            offset: 0.55,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }, {
          selector: '#eduTitle',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateX(200px)'
          }, {
            opacity: 0,
            offset: 0.5,
            transform: 'translateX(200px)'
          }, {
            opacity: 1,
            offset: 0.6,
            transform: 'translateX(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateX(0px)'
          }]
        }, {
          selector: '#eduImg1',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(200px)'
          }, {
            opacity: 0,
            offset: 0.63,
            transform: 'translateY(200px)'
          }, {
            opacity: 1,
            offset: 0.71,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }, {
          selector: '#eduImg2',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(200px)'
          }, {
            opacity: 0,
            offset: 0.56,
            transform: 'translateY(200px)'
          }, {
            opacity: 1,
            offset: 0.66,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }, {
          selector: '#eduImg3',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(200px)'
          }, {
            opacity: 0,
            offset: 0.64,
            transform: 'translateY(200px)'
          }, {
            opacity: 1,
            offset: 0.72,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }, {
          selector: '#eduImg4',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(200px)'
          }, {
            opacity: 0,
            offset: 0.61,
            transform: 'translateY(200px)'
          }, {
            opacity: 1,
            offset: 0.71,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }, {
          selector: '#eduImg5',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(200px)'
          }, {
            opacity: 0,
            offset: 0.59,
            transform: 'translateY(200px)'
          }, {
            opacity: 1,
            offset: 0.65,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }, {
          selector: '#eduImg6',
          keyframes: [{
            opacity: 0,
            offset: 0,
            transform: 'translateY(200px)'
          }, {
            opacity: 0,
            offset: 0.58,
            transform: 'translateY(200px)'
          }, {
            opacity: 1,
            offset: 0.68,
            transform: 'translateY(0px)'
          }, {
            opacity: 1,
            offset: 1,
            transform: 'translateY(0px)'
          }]
        }]
      }
    })), React.createElement(ContentStuff, null, React.createElement(_Container.default, null, React.createElement(_Grid.default, null, React.createElement(ContentGridCol, {
      cols: 4,
      offset: 2,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(ContentWrapper, null, React.createElement(_Text.default.P, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."), React.createElement(_Text.default.P, null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."))), React.createElement(_Grid.default.Col, {
      cols: 2,
      offset: 1,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, {
      style: {
        marginBottom: '120px',
        maxWidth: '220px'
      }
    }, React.createElement(_Text.default.Accent, {
      color: "rose"
    }, "39%"), React.createElement(_Text.default, {
      color: "rose"
    }, "% of those aged between 21 and 36 who have completed at least a bachelor's degree")), React.createElement(MobileFloatRight, null, React.createElement("amp-img", {
      width: "218",
      height: "285",
      layout: "fixed",
      src: "/static/education-fem-sitting.svg",
      style: {
        marginBottom: '20px'
      }
    }), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "rose",
      style: {
        transform: 'translateY(8%) rotate(24deg)'
      }
    })))), React.createElement(_Grid.default, {
      style: {
        marginTop: '60px'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 7,
      offset: 3,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.Accent, {
      color: "rose"
    }, "Women are 4x more likely to have a bachelor\u2019s degree.")))), React.createElement(_Grid.default, {
      style: {
        marginTop: '75px'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 2,
      offset: 2,
      textAlign: "right",
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "rose",
      style: {
        transform: 'translateY(50%) rotate(45deg)'
      }
    })), React.createElement(ContentGridCol, {
      cols: 4,
      colsAtTabletLandscape: 12
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, {
      style: {
        paddingTop: '35px'
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."), React.createElement(_Text.default.P, null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat.")))))), React.createElement(GridBackground, null, React.createElement(_Container.default, null, React.createElement(Windows, null, React.createElement(WindowHover1, {
      z: "3",
      width: "565px",
      title: "Become a developer",
      bgColor: "purpleHeart",
      textColor: "white"
    }, React.createElement("pre", {
      style: {
        lineHeight: '1.2rem'
      }
    }, `
class ShoppingList extends React.Component {
render() {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {this.props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
}
}

// Example usage: <ShoppingList name="Mark" />
                `)), React.createElement(WindowHover2, {
      z: "2"
    }, React.createElement("amp-img", {
      layout: "fixed",
      width: "494",
      height: "316",
      src: "/static/education-window-img1.svg"
    })), React.createElement(WindowHover3, {
      z: "1"
    }, React.createElement("amp-img", {
      layout: "fixed",
      width: "538",
      height: "204",
      src: "/static/education-window-img2.svg",
      style: {
        margin: '90px 0 35px'
      }
    }))), React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      offset: 3,
      cols: 6,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.AccentSmall, {
      color: "rose",
      style: {
        position: 'relative',
        zIndex: '11'
      }
    }, "But millennials are turning to the internet in order to learn new skills and change careers.")), React.createElement(WindowHover4, {
      bgColor: "serenade",
      title: "Online courses"
    }, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "rose",
      style: {
        margin: '0 70px 30px'
      }
    }), React.createElement(_Text.default, {
      family: "Oswald",
      size: "16px",
      color: "webOrange",
      weight: "300",
      height: "24px"
    }, "Class 24"), React.createElement(_Text.default, {
      color: "webOrange",
      size: "33px",
      height: "42px",
      weight: "400"
    }, "Congratulations"), React.createElement(_Text.default, {
      color: "webOrange",
      size: "33px",
      height: "42px",
      weight: "400",
      style: {
        marginBottom: '35px'
      }
    }, "You've graduated")))), React.createElement(VideoWindowWrapper, null, React.createElement(VideoWindow1, {
      title: "Learn AMP by Example",
      width: "225px"
    }, React.createElement(_Text.default, {
      size: "12px",
      height: "14px",
      weight: "400"
    }, "A hands-on introduction to Accelerated Mobile Pages (AMP) focusing on code and live samples. Learn how to create AMP pages and see examples for all AMP components."), React.createElement("amp-youtube", {
      style: {
        marginTop: '25px'
      },
      width: "480",
      height: "270",
      layout: "responsive",
      "data-videoid": "lBTCB7yLs8Y"
    }), React.createElement(Break, null), React.createElement(_Text.default, {
      size: "12px",
      height: "14px",
      weight: "bold"
    }, "Introduction"), React.createElement(_Text.default, {
      size: "12px",
      height: "14px",
      weight: "400"
    }, "Get started with AMP and learn how to build your first AMP pa")), React.createElement(VideoWindow2, {
      title: "Get started with AMP",
      width: "568px"
    }, React.createElement("amp-youtube", {
      style: {
        margin: '-30px -25px 15px'
      },
      width: "480",
      height: "270",
      layout: "responsive",
      "data-videoid": "lBTCB7yLs8Y"
    }), React.createElement("div", {
      style: {
        maxWidth: '315px'
      }
    }, React.createElement(_Text.default, {
      size: "16px",
      height: "19px",
      weight: "400",
      style: {
        marginBottom: '15px'
      }
    }, "Course 3: Prepare your AMP page for discovery and distribution"), React.createElement(_Text.default, {
      size: "12px",
      height: "14px",
      weight: "400"
    }, "In some cases, you might want to have both a non-AMP and an AMP version of the same page, for example, a news article. Consider this: If Google Search finds the non-AMP version of that page, how does it know there\u2019s a \"paired\" AMP version of it?")))))));
  }

}

var _default = Education;
exports.default = _default;