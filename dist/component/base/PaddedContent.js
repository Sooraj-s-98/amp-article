"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PaddedContent = _styledComponents.default.div`
  padding: ${({
  f = 0,
  h = f,
  v = f
}) => `${v * 8}px ${h * 8}px`};
`;
var _default = PaddedContent;
exports.default = _default;