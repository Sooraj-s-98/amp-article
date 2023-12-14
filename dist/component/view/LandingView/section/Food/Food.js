"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

var _ParallaxAnimation = _interopRequireDefault(require("../../../../amp/ParallaxAnimation"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Grid = _interopRequireDefault(require("../../../../base/Grid"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _LightboxLink = _interopRequireDefault(require("../../../../base/LightboxLink"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

var _SpacedContent = _interopRequireDefault(require("../../../../base/SpacedContent"));

var _PaddedContent = _interopRequireDefault(require("../../../../base/PaddedContent"));

var _FoodBurger = _interopRequireDefault(require("./FoodBurger"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const FoodSection = _styledComponents.default.section`
  background: ${({
  theme
}) => theme.colors.tumbleweed};
  color: ${({
  theme
}) => theme.colors.punga};
  padding: 540px 0 0 0;
  position: relative;
  overflow: hidden;
`;
const CalloutContent = _styledComponents.default.div`
  position: relative;
  color: ${({
  theme
}) => theme.colors.white};
  max-width: 215px;

  ${_device.device.below.tabletLandscape`
    margin: -10% auto 200px auto;
  `};
`;
const CalloutBackground = (0, _styledComponents.default)(_AmpImage.default)`
  position: absolute;
  top: 0;
  left: 0;

  ${_device.device.below.tabletLandscape`
    left: 50%;
    transform: translateX(-50%);
  `};
`;
const Box = _styledComponents.default.div`
  background: #fff;
  border-radius: 8px;
  color: #503114;
  font-size: 18px;
  letter-spacing: 0.13px;
  line-height: 34px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.17);
  z-index: 2;
`;
const Hr = _styledComponents.default.hr`
  border-width: 1px 0 0 0;
  border-color: ${({
  theme
}) => theme.colors.punga};
  opacity: 0.1;
`;
const RobotArm = (0, _styledComponents.default)(_AmpImage.default)`
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: bottom left;
  transform: translate(190px, -350px);

  ${_device.device.above.desktop`
    transform: none;
    left: auto;
    right: 0;
    top: 150px;
  `};

  ${_device.device.below.tabletLandscape`
    transform: translate(40%, -340px) rotate(-35deg);
  `};

  ${_device.device.below.tabletPortrait`
    transform: translate(200px, -400px) rotate(-35deg);
  `};
`;
const Title = (0, _styledComponents.default)(_Text.default.Title)`
  margin-top: 400px;
  ${_device.device.below.tabletLandscape`
    margin-top: 40px;
    font-size: 18vw;
  `};
`;
const BelowTitle = (0, _styledComponents.default)(_SpacedContent.default)`
  margin-top: -300px;
  ${_device.device.below.tabletLandscape`
    margin-top: 20px;
  `};
`;
const CustomTitle = (0, _styledComponents.default)(_Text.default.Accent)`
  font-size: 64px;
  ${_device.device.below.tabletLandscape`
    font-size: 12vw;
  `};
`;
const CustomP = (0, _styledComponents.default)(_Text.default.P)`
  font-size: 24px;
  text-align: left;

  ${_device.device.below.tabletLandscape`
    font-size: 18px;
  `};
`;
const LightboxLinks = _styledComponents.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1100px;
  margin: 0 auto;
`;

class Callout extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(CalloutBackground, {
      layout: "fixed",
      src: "/static/food/stat-bg.png",
      width: "280",
      height: "280"
    }), React.createElement(_PositionObserver.default, {
      id: "foodCalloutObserver",
      "instersection-ratios": "1",
      on: "scroll:foodCalloutParallaxAnim.seekTo(percent=event.percent)"
    }), React.createElement(_ParallaxAnimation.default, {
      id: "foodCalloutParallaxAnim",
      selector: "#food-callout",
      transform: "translateY(-60%)"
    }), React.createElement(CalloutContent, {
      id: "food-callout"
    }, React.createElement(_Text.default.Accent, {
      style: {
        fontSize: '120px'
      }
    }, "55%"), React.createElement(_Text.default, null, "percent of millennials who say convenience is a top driver when buying food"), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.foodColoured,
      style: {
        position: 'absolute',
        top: -100,
        left: '-50%'
      }
    })));
  }

}

class Food extends React.Component {
  render() {
    return React.createElement(FoodSection, null, React.createElement(RobotArm, {
      layout: "fixed",
      width: "1043",
      height: "567",
      src: "/static/food/robot@2x.png",
      hideFor: _device.device.below.desktop
    }), React.createElement(_Container.default, null, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      offset: 1,
      cols: 3,
      offsetAtTabletLandscape: 0,
      colsAtTabletLandscape: 12
    }, React.createElement(RobotArm, {
      layout: "fixed",
      width: "1043",
      height: "567",
      src: "/static/food/robot@2x.png",
      hideFor: _device.device.above.desktop
    }), React.createElement(_FoodBurger.default, null)), React.createElement(_Grid.default.Col, {
      cols: 8,
      colsAtTabletLandscape: 12
    }, React.createElement(_MobilePadding.default, null, React.createElement(Title, {
      color: "white"
    }, "THEY\u2019RE", React.createElement("br", null), " CHANGING", React.createElement("br", null), " THE WAY", React.createElement("br", null), " THEY EAT"))))), React.createElement(BelowTitle, {
      f: 25,
      footer: true
    }, React.createElement(_Container.default, null, React.createElement(_Grid.default, {
      alignItems: "center"
    }, React.createElement(_Grid.default.Col, {
      cols: 3,
      offset: 2,
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(Callout, null)), React.createElement(_Grid.default.Col, {
      cols: 5,
      offset: 1,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_SpacedContent.default, {
      f: 4
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."), React.createElement(_Text.default.P, null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."), React.createElement(Box, null, React.createElement(_SpacedContent.default, {
      f: 4,
      header: true,
      footer: true
    }, React.createElement(_PaddedContent.default, {
      h: 8
    }, React.createElement(_AmpImage.default, {
      src: "/static/food/spookyphone@2x.png",
      layout: "fixed",
      width: "125",
      height: "125"
    })), React.createElement(_PaddedContent.default, {
      h: 8
    }, React.createElement(_Text.default, {
      size: "18px",
      weight: "bold"
    }, "Millenials: a generation of photographers"), React.createElement(_Text.default.P, null, "Millennials take and share photos (especially of their food). It looks like there is an insatiable thirst to share photos of their life within their social sphere with the hope it will generate thousands of \"likes\".")), React.createElement(Hr, null), React.createElement(_PaddedContent.default, {
      h: 8,
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, React.createElement(_Text.default, {
      size: "18px",
      weight: "bold"
    }, "Read the story"), React.createElement(_AmpImage.default, {
      layout: "fixed",
      src: "/static/food/next-arrow.png",
      width: "32",
      height: "32"
    })))), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        position: 'absolute',
        bottom: -50,
        left: '-20%',
        zIndex: 1
      }
    }), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        position: 'absolute',
        bottom: -50,
        right: '-20%',
        zIndex: 1,
        transform: 'rotate(45deg)'
      }
    })))))), React.createElement(_Container.default, null, React.createElement(_SpacedContent.default, {
      f: 8
    }, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      cols: 12,
      hideFor: _device.device.above.tabletLandscape
    }, React.createElement(Callout, null)), React.createElement(_Grid.default.Col, {
      offset: 3.5,
      cols: 6,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(_SpacedContent.default, {
      f: 4
    }, React.createElement(CustomTitle, null, "They love", React.createElement("br", null), " customization"), React.createElement(CustomP, null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."))))), React.createElement(LightboxLinks, null, React.createElement(_LightboxLink.default, {
      title: "Artisan Bread",
      bgColor: "bilobaFlower",
      cardImgSrc: "/static/food/bread_1@2x.png",
      cardImgWidth: "429",
      cardImgHeight: "320"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Dat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."), React.createElement(_LightboxLink.default, {
      title: "Hamburger",
      bgColor: "fountainBlue",
      cardImgSrc: "/static/food/burger@2x.png",
      cardImgWidth: "358",
      cardImgHeight: "358"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Dat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."), React.createElement(_LightboxLink.default, {
      title: "Tacos",
      bgColor: "magicMint",
      cardImgSrc: "/static/food/tacos@2x.png",
      cardImgWidth: "378",
      cardImgHeight: "359"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Dat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."), React.createElement(_LightboxLink.default, {
      title: "Sushis",
      bgColor: "vividTangerine",
      cardImgSrc: "/static/food/sushi@2x.png",
      cardImgWidth: "403",
      cardImgHeight: "334"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Dat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."), React.createElement(_LightboxLink.default, {
      title: "Avocado",
      bgColor: "macAndCheese",
      cardImgSrc: "/static/food/avocado@2x.png",
      cardImgWidth: "340",
      cardImgHeight: "378"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Dat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."), React.createElement(_LightboxLink.default, {
      title: "Roasted Coffee",
      bgColor: "parisDaisy",
      cardImgSrc: "/static/food/coffee@2x.png",
      cardImgWidth: "368",
      cardImgHeight: "407"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Dat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat."))))));
  }

}

var _default = Food;
exports.default = _default;