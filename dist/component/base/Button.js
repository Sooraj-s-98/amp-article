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

const BaseButton = props => {
  const realProps = (0, _ramda.omit)(['color'], props);
  return React.createElement("button", realProps);
};

const Button = (0, _styledComponents.default)(BaseButton)`
  height: 50px;
  border-radius: 25px;
  background: #ff0056;
  display: ${({
  block
}) => block ? 'flex' : 'inline-flex'};
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  min-width: 181px;
`;
Button.FakeLink = (0, _styledComponents.default)(BaseButton)`
  color: ${({
  color
}) => color ? color : 'white'};
  display: ${({
  block
}) => block ? 'flex' : 'inline-flex'};
  align-items: center;
  flex-direction: row;
`;
Button.Header = (0, _styledComponents.default)(BaseButton)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  cursor: pointer;
  color: ${({
  color
}) => color ? color : 'white'};
`;
Button.White = (0, _styledComponents.default)(BaseButton)`
  background: #fff;
  color: #000;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 100em;
  padding: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
var _default = Button;
exports.default = _default;