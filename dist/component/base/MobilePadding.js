"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../util/device");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MobilePadding = _styledComponents.default.div`
  ${_device.device.below.tabletLandscape`
    padding: 0 25px;
  `};
`;
var _default = MobilePadding;
exports.default = _default;