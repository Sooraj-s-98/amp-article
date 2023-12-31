"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * https://ampbyexample.com/visual_effects/basics_of_orientation_effects/
 * Optional additional params:
 *   - [alpha|beta|gamma]-range="0 360"
 */
class OrientationObserver extends React.Component {
  render() {
    const {
      on,
      id,
      ...rest
    } = this.props;
    return React.createElement("amp-orientation-observer", _extends({
      id: id,
      on: on,
      layout: "nodisplay"
    }, rest));
  }

}

var _default = OrientationObserver;
exports.default = _default;