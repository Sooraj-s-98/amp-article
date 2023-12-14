"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SpacedContent = _interopRequireDefault(require("../base/SpacedContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const FooterContainer = _styledComponents.default.footer`
  color: #fff;
  font: 300 18px/28px Roboto;
  text-align: center;
  padding-bottom: 130px;
`;
const Faded = _styledComponents.default.span`
  opacity: 0.5;
`;

class Footer extends React.Component {
  render() {
    return React.createElement(FooterContainer, null, React.createElement(_SpacedContent.default, {
      f: 4
    }, React.createElement("div", null, React.createElement("div", null, React.createElement(Faded, null, "Article written by"), " AMP Team"), React.createElement("div", null, React.createElement(Faded, null, "Design by"), " AMP Team"), React.createElement("div", null, React.createElement(Faded, null, "Illustrations by"), " AMP Team")), React.createElement("div", null, React.createElement("div", null, React.createElement(Faded, null, "Statistics from")), React.createElement("div", null, "GlobalWebIndex Q1 2017"), React.createElement("div", null, "The Washington Post"), React.createElement("div", null, "National Centre for Education"), React.createElement("div", null, "YFSMagazine"), React.createElement("div", null, "\u2026")), React.createElement("div", null, React.createElement("div", null, React.createElement(Faded, null, "Powered by"), " AMP"), React.createElement("div", null, React.createElement(Faded, null, "AMP \xA9 Copyright 2018")))));
  }

}

var _default = Footer;
exports.default = _default;