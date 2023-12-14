"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _LandingView = _interopRequireDefault(require("../view/LandingView"));

var _CSSReset = _interopRequireDefault(require("../css/CSSReset"));

var _theme = _interopRequireDefault(require("../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AppRoot extends React.Component {
  render() {
    return React.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, React.createElement(React.Fragment, null, React.createElement(_CSSReset.default, null), React.createElement(_reactRouterDom.Switch, null, React.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: _LandingView.default
    }))));
  }

}

_defineProperty(AppRoot, "rootElementId", 'app');

var _default = AppRoot;
exports.default = _default;