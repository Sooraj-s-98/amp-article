"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../util/device");

var _Container = _interopRequireDefault(require("../base/Container"));

var _MobileHeader = _interopRequireDefault(require("../base/MobileHeader"));

var _Grid = _interopRequireDefault(require("../base/Grid"));

var _Button = _interopRequireDefault(require("../base/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TopContainer = (0, _styledComponents.default)(_Container.default)`
  margin-bottom: 140px;
  ${_device.device.below.tabletLandscape`margin-bottom: 90px;`};
`;
const MobileHeaderContainer = _styledComponents.default.div`
  margin: 10px 0;
  color: ${({
  theme
}) => theme.colors.white};
`;
const HeaderContainer = _styledComponents.default.div`
  margin-top: 50px;
  color: ${({
  theme
}) => theme.colors.white};
`;
const NavGroup = _styledComponents.default.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const NavItem = _styledComponents.default.li`
  display: inline-flex;
  margin-left: 8px;
  margin-right: 8px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
const HeaderButton = _styledComponents.default.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
`;
const Logo = _styledComponents.default.div`
  font-size: 1.5em;
  font-family: ${({
  theme
}) => theme.fonts.logo};
`;

class Header extends React.Component {
  render() {
    return React.createElement(TopContainer, null, React.createElement(MobileHeaderContainer, null, React.createElement(_MobileHeader.default, null)), React.createElement(HeaderContainer, null, React.createElement(_Grid.default, {
      alignItems: "center",
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(_Grid.default.Col, {
      cols: 3,
      textAlign: "right"
    }, React.createElement(Logo, null, "Mood")), React.createElement(_Grid.default.Col, {
      cols: 6
    }, React.createElement("nav", {
      style: {
        padding: '0 12%'
      }
    }, React.createElement(NavGroup, null, React.createElement(NavItem, null, React.createElement(_Button.default.FakeLink, null, "Tech")), React.createElement(NavItem, null, React.createElement(_Button.default.FakeLink, null, "Science")), React.createElement(NavItem, null, React.createElement(_Button.default.FakeLink, null, "Culture")), React.createElement(NavItem, null, React.createElement(_Button.default.FakeLink, null, "Reviews")), React.createElement(NavItem, null, React.createElement(_Button.default.FakeLink, null, "Videos"))))), React.createElement(_Grid.default.Col, {
      cols: 3
    }, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(_Button.default.FakeLink, {
      style: {
        display: 'block'
      }
    }, React.createElement(HeaderButton, null, React.createElement("amp-img", {
      layout: "fixed",
      width: "22",
      height: "22",
      src: "/static/icons/search.svg"
    }))), React.createElement(_Button.default.FakeLink, {
      style: {
        display: 'block'
      }
    }, React.createElement(HeaderButton, null, React.createElement("amp-img", {
      layout: "fixed",
      width: "19",
      height: "24",
      src: "/static/icons/user.svg"
    }))))))));
  }

}

var _default = Header;
exports.default = _default;