"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _MobileSidebar = _interopRequireDefault(require("../sidebar/MobileSidebar"));

var _theme = _interopRequireDefault(require("../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SidebarRoot extends React.Component {
  render() {
    return React.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    }, React.createElement(React.Fragment, null, React.createElement(_MobileSidebar.default, null)));
  }

}

_defineProperty(SidebarRoot, "rootElementId", 'sidebar');

var _default = SidebarRoot;
exports.default = _default;