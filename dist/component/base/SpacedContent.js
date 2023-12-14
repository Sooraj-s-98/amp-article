"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SpacedContent = (0, _styledComponents.default)(({
  f: _f,
  border: _border,
  footer: _x,
  header: _y,
  ...rest
}) => React.createElement("div", rest))`
  ${({
  footer,
  f
}) => {
  if (footer) {
    return _styledComponents.css`
        padding-bottom: ${f * 8}px;
      `;
  }

  return '';
}} ${({
  header,
  f
}) => {
  if (header) {
    return _styledComponents.css`
        padding-top: ${f * 8}px;
      `;
  }

  return '';
}}
   > * {
    margin-top: ${({
  f
}) => f * 8}px;
    margin-bottom: ${({
  f
}) => f * 8}px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    ${({
  border
}) => {
  if (border) {
    return _styledComponents.css`
          padding-bottom: ${({
      f
    }) => f * 8}px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.08);
        `;
  }

  return '';
}};
  }
`;
var _default = SpacedContent;
exports.default = _default;