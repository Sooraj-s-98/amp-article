"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../base/Button"));

var _HeaderButtons = _interopRequireDefault(require("../base/HeaderButtons"));

var _Logo = _interopRequireDefault(require("../base/Logo"));

var _Icon = _interopRequireDefault(require("../base/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SidebarContainer = (0, _styledComponents.default)(({
  className,
  ...rest
}) => React.createElement("amp-sidebar", _extends({
  class: className
}, rest)))`
  width: 100%;
  max-width: 100%;
  background: transparent;

  &[open] .closeContainer {
    background: rgba(0, 0, 0, 1);
  }

  & > div:empty {
    display: none;
  }
`;
const SidebarWrap = _styledComponents.default.div`
  display: flex;
  flex-direction: row-reverse;
  min-height: 100%;
`;
const HeaderContainer = _styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 0 15px;
`;
const CloseContainer = _styledComponents.default.div`
  background: rgba(0, 0, 0, 0);
  transition: background-color 0.25s ease-out 0.2s;
  padding-top: 15px;
`;
const ContentContainer = _styledComponents.default.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
`;
const SidebarContent = _styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
`;
const Item = _styledComponents.default.div`
  border-bottom: 1px solid ${({
  theme
}) => theme.colors.alto};
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: 0px none;
  }
`;
const Link = _styledComponents.default.div`
  color: ${({
  theme
}) => theme.colors.purpleHeart};
  font-size: 21px;
  letter-spacing: 0.26px;
`;
const Number = _styledComponents.default.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 21px;
  letter-spacing: 0.26px;
`;
const Footer = _styledComponents.default.div`
  padding: 30px 15px;
  font-weight: 200;
  letter-spacing: 0.2px;
  background: #fff;

  & strong {
    font-weight: bold;
  }
`;

class MobileSidebar extends React.Component {
  render() {
    return React.createElement(SidebarContainer, {
      id: "sidebar",
      layout: "nodisplay",
      side: "left"
    }, React.createElement(SidebarWrap, {
      className: "SidebarWrap"
    }, React.createElement(CloseContainer, {
      className: "closeContainer"
    }, React.createElement(_Button.default.Header, {
      color: "white",
      on: "tap:sidebar.close"
    }, React.createElement(_Icon.default, {
      name: "x",
      size: 24
    }))), React.createElement(ContentContainer, null, React.createElement(HeaderContainer, null, React.createElement(_Logo.default, {
      color: "black"
    }), React.createElement(_HeaderButtons.default, {
      color: "black"
    })), React.createElement(SidebarContent, null, React.createElement("div", null, React.createElement(Item, null, React.createElement(Link, null, "Tech"), React.createElement(Number, null, "21")), React.createElement(Item, null, React.createElement(Link, null, "Science"), React.createElement(Number, null, "18")), React.createElement(Item, null, React.createElement(Link, null, "Culture"), React.createElement(Number, null, "34")), React.createElement(Item, null, React.createElement(Link, null, "Reviews"), React.createElement(Number, null, "11")), React.createElement(Item, null, React.createElement(Link, null, "Videos"), React.createElement(Number, null, "48"))), React.createElement(Footer, null, React.createElement("strong", null, "Mood"), " is an online magazine that runs cover stories\u2014big, ambitious pieces intended to change the way you see the world or influence the course of policy")))));
  }

}

var _default = MobileSidebar;
exports.default = _default;