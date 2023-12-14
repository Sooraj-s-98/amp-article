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

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

var _DatingCard = _interopRequireDefault(require("../../../../base/DatingCard"));

var _SpacedContent = _interopRequireDefault(require("../../../../base/SpacedContent"));

var _PaddedContent = _interopRequireDefault(require("../../../../base/PaddedContent"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

var _SleepIntro = _interopRequireDefault(require("./SleepIntro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const RelationshipsSection = _styledComponents.default.section`
  background: ${({
  theme
}) => theme.colors.carnationPink};
  color: ${({
  theme
}) => theme.colors.paprika};
  position: relative;
  z-index: 7;
  padding: 200px 0 0 0;
`;
const SleepBackground = _styledComponents.default.div`
  background: linear-gradient(180deg, #fc9ebe 0%, #20233f 100%);
  position: absolute;
  left: 0;
  right: 0;
  bottom: -300px;
  height: 800px;
  display: none;
`;
const TitleCap = _styledComponents.default.div`
  position: relative;
  left: -250px;
  bottom: -54px;
  z-index: 1;
  ${_device.device.below.tabletLandscape`
    left: -150px;
    bottom: -47px;
  `}
  ${_device.device.below.tabletPortrait`
    left: -150px;
    bottom: -32px;
  `}
`;
const Accent = (0, _styledComponents.default)(_Text.default.Accent)`
  padding-top: 80px;

  ${_device.device.below.tabletPortrait`
    font-size: 90px;
    padding-top: 0;
    margin-top: -40px;
  `}
`;
const CalloutImage = (0, _styledComponents.default)(_AmpImage.default)`
  margin-top: 120px;
  margin: 120px auto 0 auto;
  ${_device.device.below.tabletPortrait`
    margin-top: 240px;
  `}
`;

class Relationships extends React.Component {
  render() {
    return React.createElement(RelationshipsSection, null, React.createElement(SleepBackground, null), React.createElement(_Container.default, null, React.createElement(_SpacedContent.default, {
      f: 12,
      style: {
        position: 'relative',
        zIndex: '2'
      }
    }, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      cols: 5,
      offset: 2,
      colsAtTabletLandscape: 7,
      offsetAtTabletLandscape: 0,
      colsAtTabletPortrait: 12,
      offsetAtTabletPortrait: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(TitleCap, null, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        position: 'absolute',
        right: '30%',
        top: -56
      }
    }), React.createElement(_AmpImage.default, {
      layout: "responsive",
      width: "436",
      height: "185",
      src: "/static/relationships/woman-lying-down@2x.png"
    })), React.createElement(_AmpImage.default, {
      layout: "responsive",
      width: "536",
      height: "522",
      src: "/static/relationships/main-title@2x.png"
    })), React.createElement(_MobilePadding.default, null, React.createElement(_Grid.default, {
      hideFor: _device.device.above.phone,
      style: {
        marginTop: '60px'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 6,
      style: {
        zIndex: 2
      }
    }, React.createElement(_SpacedContent.default, {
      f: 6
    }, React.createElement(_DatingCard.default, {
      id: "date-card-mobile-1",
      layout: "responsive",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card1@2x.png"
    }), React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        paddingTop: '100%'
      }
    }, React.createElement(_DatingCard.default, {
      id: "date-card-mobile-2",
      layout: "intrinsic",
      flyoutDirection: "left",
      width: "405",
      height: "276",
      src: "/static/relationships/card9@2x.png",
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '170%'
      }
    })), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-3",
      layout: "responsive",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card8@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-4",
      layout: "responsive",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card10@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-5",
      layout: "responsive",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card7@2x.png"
    }))), React.createElement(_Grid.default.Col, {
      cols: 6,
      style: {
        zIndex: 2
      }
    }, React.createElement(_SpacedContent.default, {
      f: 6
    }, React.createElement(_DatingCard.default, {
      id: "date-card-mobile-6",
      layout: "responsive",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card2@2x.png",
      style: {
        marginTop: '100px'
      }
    }), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-7",
      layout: "responsive",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card3@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-8",
      layout: "responsive",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card4@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-9",
      layout: "responsive",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card5@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-mobile-10",
      layout: "responsive",
      width: "233",
      height: "278",
      src: "/static/relationships/card6@2x.png"
    }))), React.createElement(_Grid.default.Col, {
      cols: 12,
      style: {
        zIndex: 1
      }
    }, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        margin: '-30% auto 0 auto'
      }
    })))), React.createElement(_Grid.default, {
      style: {
        marginTop: '150px'
      },
      hideFor: _device.device.below.tabletPortrait
    }, React.createElement(_Grid.default.Col, {
      cols: 6
    }, React.createElement("div", {
      style: {
        width: '100%',
        height: '276px',
        position: 'relative'
      }
    }, React.createElement(_DatingCard.default, {
      id: "date-card-10",
      flyoutDirection: "left",
      width: "405",
      height: "276",
      src: "/static/relationships/card9@2x.png",
      style: {
        position: 'absolute',
        top: '0',
        right: '0%',
        marginTop: '50%'
      }
    }))), React.createElement(_Grid.default.Col, {
      cols: 6,
      textAlign: "right"
    }, React.createElement(_SpacedContent.default, {
      f: 6
    }, React.createElement(_DatingCard.default, {
      id: "date-card-8",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card8@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-9",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card10@2x.png"
    })))), React.createElement(_SpacedContent.default, {
      f: 4
    }, React.createElement(_MobilePadding.default, {
      style: {
        marginTop: '60px'
      }
    }, React.createElement(_Text.default.P, {
      color: "paprika"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."), React.createElement(_Text.default.P, {
      color: "paprika"
    }, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat.")))), React.createElement(_Grid.default.Col, {
      cols: 2,
      offset: 1,
      hideFor: _device.device.below.phone
    }, React.createElement(_SpacedContent.default, {
      f: 6
    }, React.createElement(_DatingCard.default, {
      id: "date-card-1",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card1@2x.png",
      style: {
        marginTop: '100px'
      }
    }), React.createElement(_DatingCard.default, {
      id: "date-card-2",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card2@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-3",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card3@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-4",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card4@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-5",
      flyoutDirection: "left",
      width: "233",
      height: "278",
      src: "/static/relationships/card5@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-6",
      flyoutDirection: "right",
      width: "233",
      height: "278",
      src: "/static/relationships/card7@2x.png"
    }), React.createElement(_DatingCard.default, {
      id: "date-card-7",
      width: "233",
      height: "278",
      src: "/static/relationships/card6@2x.png"
    }), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "white",
      style: {
        transform: 'rotate(45deg)'
      }
    })))), React.createElement(_Grid.default, {
      style: {
        marginTop: '-150px'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 4,
      offset: 1.5,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_PaddedContent.default, {
      f: 2
    }, React.createElement(_PositionObserver.default, {
      id: "relCallout2Observer",
      "instersection-ratios": "1",
      on: "scroll:relCallout2ParallaxAnim.seekTo(percent=event.percent)"
    }), React.createElement(_ParallaxAnimation.default, {
      id: "relCallout2ParallaxAnim",
      selector: "#relationship-callout2",
      transform: "translateY(-60%)"
    }), React.createElement("div", {
      id: "relationship-callout2",
      style: {
        position: 'relative',
        textAlign: 'center'
      }
    }, React.createElement(CalloutImage, {
      layout: "intrinsic",
      width: "385",
      height: "385",
      src: "/static/relationships/callout@2x.png"
    }), React.createElement(_Confetti.default, {
      color: "white",
      pieces: _Confetti.presets.small,
      style: {
        position: 'absolute',
        bottom: '200px',
        left: '45%',
        transform: 'translateX(-50%)'
      }
    })))), React.createElement(_Grid.default.Col, {
      cols: 4,
      offset: 1,
      colsAtTabletPortrait: 12,
      offsetAtTabletPortrait: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement("div", {
      style: {
        maxWidth: '320px'
      }
    }, React.createElement(Accent, {
      color: "white"
    }, "21%"), React.createElement(_Text.default, {
      style: {
        marginTop: '15px'
      }
    }, "millennials who are married or in relationships met their partner online, according to Avvo.")), React.createElement("div", {
      style: {
        margin: '150px 0 0 0'
      }
    }, React.createElement(_Text.default.P, {
      color: "paprika"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."))))))), React.createElement(_SleepIntro.default, null));
  }

}

var _default = Relationships;
exports.default = _default;