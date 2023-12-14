"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ButtonContainer = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['color'], props);
  return React.createElement("div", realProps);
})`
  display: flex;
  justify-content: flex-end;
`;
const FakeLink = (0, _styledComponents.default)(_Button.default.FakeLink)`
  display: block;
`;

class HeaderButtons extends React.Component {
  render() {
    return React.createElement(ButtonContainer, {
      color: this.props.color
    }, React.createElement(FakeLink, null, React.createElement(_Button.default.Header, {
      color: this.props.color
    }, React.createElement("amp-img", {
      layout: "fixed",
      width: "22",
      height: "22",
      src: "/static/icons/search.svg"
    }))), React.createElement(FakeLink, null, React.createElement(_Button.default.Header, {
      color: this.props.color
    }, React.createElement("amp-img", {
      layout: "fixed",
      width: "19",
      height: "24",
      src: "/static/icons/user.svg"
    }))));
  }

}

var _default = HeaderButtons;
exports.default = _default;