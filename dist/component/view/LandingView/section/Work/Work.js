"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Grid = _interopRequireDefault(require("../../../../base/Grid"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

var _WorkClock = _interopRequireDefault(require("./WorkClock"));

var _WorkAnimation = _interopRequireDefault(require("./WorkAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const WorkSection = _styledComponents.default.section`
  background: ${({
  theme
}) => theme.colors.dandelion};
  color: ${({
  theme
}) => theme.colors.black};
  padding-bottom: 400px;
`;
const WorkGrid = (0, _styledComponents.default)(_Grid.default)`
  padding-top: 225px;
  ${_device.device.below.tabletLandscape`padding-top: 30px;`};
`;
const ImageCol = (0, _styledComponents.default)(_Grid.default.Col)`
  ${_device.device.below.tabletLandscape`text-align: center;`};
`;

class Work extends React.Component {
  render() {
    return React.createElement(WorkSection, null, React.createElement(_Container.default, null, React.createElement(WorkGrid, null, React.createElement(_Grid.default.Col, {
      cols: 2,
      offset: 2,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0,
      style: {
        textAlign: 'center'
      }
    }, React.createElement(_WorkClock.default, null)), React.createElement(_Grid.default.Col, {
      cols: 4,
      offset: 1,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0,
      style: {
        paddingTop: '75px'
      }
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."), React.createElement(_Text.default.P, null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat.")))), React.createElement(_Grid.default, {
      style: {
        marginTop: '115px'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 2,
      offset: 3,
      colsAtTabletLandscape: 4,
      offsetAtTabletLandscape: 2,
      colsAtPhone: 6,
      offsetAtPhone: 1
    }, React.createElement(_Text.default.Accent, {
      color: "flushOrange",
      style: {
        paddingTop: '80px'
      }
    }, "71%"), React.createElement(_Text.default, {
      color: "flushOrange"
    }, "Expect and want to do an overseas assignment during their career")), React.createElement(ImageCol, {
      cols: 3,
      colsAtTabletLandscape: 6,
      colsAtPhone: 12
    }, React.createElement("amp-img", {
      width: "208",
      height: "289",
      src: "/static/work/person@2x.png",
      style: {
        zIndex: 2
      }
    }), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      color: "flushOrange",
      style: {
        position: 'absolute',
        top: 0,
        right: 100,
        zIndex: 1
      }
    }))), React.createElement(_Grid.default, {
      style: {
        marginTop: '115px',
        paddingBottom: '415px'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 4,
      offset: 5,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, null, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat.")))), React.createElement(_WorkAnimation.default, null)));
  }

}

var _default = Work;
exports.default = _default;