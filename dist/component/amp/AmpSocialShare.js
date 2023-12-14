"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AmpSocialShare = (0, _styledComponents.default)(({
  className,
  hideFor: _h,
  outline: _o,
  ...rest
}) => {
  return React.createElement("amp-social-share", _extends({
    class: className
  }, rest));
})`
  ${({
  hideFor
}) => hideFor ? hideFor`display: none;` : ''};
  ${({
  outline
}) => outline ? 'background-color: transparent; border: 1px solid #000; filter: invert(100%);' : 'background-color: #fff;'};
  border-radius: 100em;
  padding: 10px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.12);
  transition: opacity 0.1s ease-out, transform 0.25s ease-out;
  background-size: 20px;
  cursor: pointer;
`;
AmpSocialShare.Twitter = (0, _styledComponents.default)(props => {
  return React.createElement(AmpSocialShare, _extends({
    type: "twitter"
  }, props));
})`
  background-image: url('/static/icons/twitter@2x.png');
`;
AmpSocialShare.Facebook = (0, _styledComponents.default)(props => {
  return React.createElement(AmpSocialShare, _extends({
    type: "facebook",
    "data-param-app_id": "254325784911610"
  }, props));
})`
  background-image: url('/static/icons/facebook@2x.png');
`;
AmpSocialShare.Email = (0, _styledComponents.default)(props => {
  return React.createElement(AmpSocialShare, _extends({
    type: "email"
  }, props));
})`
  background-image: url('/static/icons/mail.svg');
`;
var _default = AmpSocialShare;
exports.default = _default;