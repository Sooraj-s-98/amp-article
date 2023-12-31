"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Animation extends React.Component {
  render() {
    const {
      animation,
      id
    } = this.props;
    return React.createElement("amp-animation", {
      id: id,
      layout: "nodisplay"
    }, React.createElement("script", {
      type: "application/json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(animation)
      }
    }));
  }

}

var _default = Animation;
exports.default = _default;