"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _device = require("../../util/device");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TextContainer = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['color', 'size', 'family', 'weight', 'height'], props);
  return React.createElement("div", realProps);
})`
  font-size: ${({
  size
}) => size ? size : '16px'};
  font-family: ${({
  family
}) => family ? family : 'Roboto'};
  font-weight: ${({
  weight
}) => weight ? weight : '300'};
  color: ${({
  color
}) => color ? ({
  theme
}) => theme.colors[color] : ''};
  line-height: ${({
  height
}) => height ? height : ''};
`;

class Text extends React.Component {
  render() {
    return React.createElement(TextContainer, this.props, this.props.children);
  }

}

Text.Title = (0, _styledComponents.default)(Text)`
  font: 700 170px/1.05em Oswald;
  letter-spacing: 1.9px;
  ${_device.device.below.tabletPortrait`font-size: 23.5vw;`};
`;
Text.P = (0, _styledComponents.default)(Text)`
  font: 300 18px/1.89em Roboto;
  letter-spacing: 0.13px;
  margin-bottom: 1em;
  text-align: justify;
  ${_device.device.below.tabletLandscape`text-align: left;`};
`;
Text.Accent = (0, _styledComponents.default)(Text)`
  font-size: 100px;
  line-height: 1.05em;
  font-weight: 300;
  ${_device.device.below.tabletLandscape`font-size: 16vw;`};
`;
Text.AccentSmall = (0, _styledComponents.default)(Text)`
  font-size: 56px;
  line-height: 1.17em;
  font-weight: 300;
  ${_device.device.below.tabletLandscape`font-size: 8vw;`};
`;
Text.Carousel = (0, _styledComponents.default)(Text)`
  font-size: 32px;
  line-height: 1.2em;
`;
var _default = Text;
exports.default = _default;