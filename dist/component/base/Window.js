"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _Shape = _interopRequireDefault(require("./Shape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const WindowContainer = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['textColor', 'bgColor', 'width', 'height', 'title'], props);
  return React.createElement("div", realProps);
})`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(85, 23, 208, 0.23);
  border-radius: 10px;
  width: ${({
  width
}) => width ? width : ''};
  height: ${({
  height
}) => height ? height : ''};
  position: relative;
  z-index: 1;

  &:before {
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background: linear-gradient(
      to right,
      rgba(85, 23, 208, 0) 0%,
      rgba(85, 23, 208, 0.23) 100%
    );
    background: url('/static/noise.svg') top right repeat-y;
    top: 15px;
    right: -9px;
    position: absolute;
    z-index: -1;
    border-radius: 10px;
  }
`;
const TitleBar = _styledComponents.default.div`
  border-bottom: 2px solid rgba(85, 23, 208, 0.23);
  border-radius: 10px 10px 0 0;
  text-align: center;
  background: #fff;
  position: relative;
  height: 38px;
`;
const Dots = _styledComponents.default.div`
  position: absolute;
  left: 10px;
  display: flex;
  height: 100%;
  align-items: center;

  & > div {
    margin: 0 3px;
  }
`;
const Title = _styledComponents.default.div`
  font-size: 12px;
  line-height: 38px;
  font-weight: 600;
  padding: 0 60px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Content = _styledComponents.default.div`
  background: ${({
  bgColor,
  theme
}) => bgColor ? theme.colors[bgColor] : '#fff'};
  color: ${({
  textColor,
  theme
}) => textColor ? theme.colors[textColor] : ''};
  border-radius: 0 0 10px 10px;
  padding: 30px 25px;
  flex-grow: 1;
`;

class Window extends React.Component {
  render() {
    return React.createElement(WindowContainer, this.props, React.createElement(TitleBar, null, React.createElement(Dots, null, React.createElement(_Shape.default.Dot, {
      color: "purpleHeart",
      size: "8px"
    }), React.createElement(_Shape.default.Dot, {
      color: "purpleHeart",
      size: "8px"
    }), React.createElement(_Shape.default.Dot, {
      color: "purpleHeart",
      size: "8px"
    })), React.createElement(Title, null, this.props.title)), React.createElement(Content, {
      bgColor: this.props.bgColor,
      textColor: this.props.textColor
    }, this.props.children));
  }

}

var _default = Window;
exports.default = _default;