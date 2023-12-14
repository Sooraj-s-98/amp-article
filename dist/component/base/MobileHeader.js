"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _device = require("../../util/device");

var _Grid = _interopRequireDefault(require("../base/Grid"));

var _Logo = _interopRequireDefault(require("../base/Logo"));

var _Button = _interopRequireDefault(require("../base/Button"));

var _Icon = _interopRequireDefault(require("../base/Icon"));

var _HeaderButtons = _interopRequireDefault(require("../base/HeaderButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class MobileHeader extends React.Component {
  render() {
    return React.createElement(_Grid.default, {
      alignItems: "center",
      hideFor: _device.device.above.tabletLandscape
    }, React.createElement(_Grid.default.Col, {
      cols: 6,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, React.createElement(_Button.default.Header, {
      on: "tap:sidebar.toggle"
    }, React.createElement(_Icon.default, {
      name: "menu",
      size: 24
    })), React.createElement(_Logo.default, {
      color: "white"
    })), React.createElement(_Grid.default.Col, {
      cols: 6
    }, React.createElement(_HeaderButtons.default, null)));
  }

}

var _default = MobileHeader;
exports.default = _default;