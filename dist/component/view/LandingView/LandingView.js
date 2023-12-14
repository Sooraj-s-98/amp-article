"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Header = _interopRequireDefault(require("../../partial/Header"));

var _Footer = _interopRequireDefault(require("../../partial/Footer"));

var _Intro = _interopRequireDefault(require("./section/Intro"));

var _Education = _interopRequireDefault(require("./section/Education"));

var _Work = _interopRequireDefault(require("./section/Work"));

var _Spending = _interopRequireDefault(require("./section/Spending"));

var _Relationships = _interopRequireDefault(require("./section/Relationships"));

var _Sleep = _interopRequireDefault(require("./section/Sleep"));

var _Food = _interopRequireDefault(require("./section/Food"));

var _Comments = _interopRequireDefault(require("./section/Comments"));

var _FloatingButtons = _interopRequireDefault(require("../../base/FloatingButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Wrapper = _styledComponents.default.div`
  max-width: 100vw;
`;

class LandingView extends React.Component {
  render() {
    return React.createElement(Wrapper, {
      id: "page-top"
    }, React.createElement(_Header.default, null), React.createElement(_Intro.default, null), React.createElement(_Education.default, null), React.createElement(_Work.default, null), React.createElement(_Spending.default, null), React.createElement(_Relationships.default, null), React.createElement(_Sleep.default, null), React.createElement(_Food.default, null), React.createElement(_Comments.default, null), React.createElement(_Footer.default, null), React.createElement(_FloatingButtons.default, null));
  }

}

var _default = LandingView;
exports.default = _default;