"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../util/device");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div`
  max-width: 1440px;
  min-width: ${_device.device.sizes.tiny}px;
  margin: auto;
  position: relative;
  padding: 0 16px;
`;
var _default = Container;
exports.default = _default;