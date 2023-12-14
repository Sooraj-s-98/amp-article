"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var Icons = _interopRequireWildcard(require("react-feather"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const kebabCase = str => {
  return str.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, m => /[À-ž]/.test(m) ? m : '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, m => m).toLowerCase();
};

const iconMap = {};
Object.keys(Icons).forEach(icon => {
  iconMap[kebabCase(icon)] = Icons[icon];
});

class Icon extends React.Component {
  render() {
    const {
      name,
      ...rest
    } = this.props;
    const FeatherIcon = iconMap[name];

    if (!FeatherIcon) {
      return null;
    }

    return React.createElement(FeatherIcon, rest);
  }

}

var _default = Icon;
exports.default = _default;