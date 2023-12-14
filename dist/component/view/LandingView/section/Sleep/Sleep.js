"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Grid = _interopRequireDefault(require("../../../../base/Grid"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _SpacedContent = _interopRequireDefault(require("../../../../base/SpacedContent"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

var _SleepCarousel = _interopRequireDefault(require("./SleepCarousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SleepSection = _styledComponents.default.section`
  background: ${({
  theme
}) => theme.colors.mirage};
  color: ${({
  theme
}) => theme.colors.dullLavender};
  position: relative;
`;
const Title = (0, _styledComponents.default)(_Text.default.Title)`
  color: ${({
  theme
}) => theme.colors.akaroa};
  text-align: center;
`;

class Sleep extends React.Component {
  render() {
    return React.createElement(SleepSection, null, React.createElement(_SpacedContent.default, {
      f: 14,
      footer: true,
      header: true
    }, React.createElement(_Container.default, null, React.createElement(Title, null, "SLEEP")), React.createElement(_Container.default, null, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      offset: 3,
      cols: 6,
      offsetAtTabletLandscape: 0,
      colsAtTabletLandscape: 12
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, {
      style: {
        fontSize: '24px',
        textAlign: 'center'
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien."))))), React.createElement(_Container.default, null, React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      offset: 2,
      cols: 8,
      offsetAtTabletLandscape: 0,
      colsAtTabletLandscape: 12
    }, React.createElement(_SleepCarousel.default, null))))));
  }

}

var _default = Sleep;
exports.default = _default;