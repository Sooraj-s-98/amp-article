"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _AmpImage = _interopRequireDefault(require("../amp/AmpImage"));

var _numerify = require("../../util/numerify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CoinImage = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['size', 'angle'], props);
  return React.createElement(_AmpImage.default, realProps);
})`
  transform: ${({
  angle
}) => angle ? `rotate(${angle}deg)` : ''};
`;

class Coin extends React.Component {
  render() {
    const {
      size,
      angle,
      ...rest
    } = this.props;
    return React.createElement(CoinImage, _extends({
      layout: "fixed",
      width: (0, _numerify.numerify)(size),
      height: (0, _numerify.numerify)(size),
      angle: angle,
      src: "/static/spending/coin@2x.png"
    }, rest));
  }

}

var _default = Coin;
exports.default = _default;