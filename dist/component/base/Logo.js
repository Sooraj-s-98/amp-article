"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const LogoContainer = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['color'], props);
  return React.createElement("div", realProps);
})`
  font-size: 1.5em;
  font-family: 'Abril Fatface';
  color: ${({
  color
}) => color ? color : 'white'};
`;

class Logo extends React.Component {
  render() {
    return React.createElement(LogoContainer, {
      color: this.props.color
    }, "Mood");
  }

}

var _default = Logo;
exports.default = _default;