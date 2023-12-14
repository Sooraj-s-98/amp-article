"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Animation = _interopRequireDefault(require("./Animation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class ParallaxAnimation extends React.Component {
  render() {
    const {
      id,
      selector,
      direction,
      transform
    } = this.props;
    return React.createElement(_Animation.default, {
      id: id,
      animation: {
        duration: 1,
        fill: 'both',
        direction: direction ? direction : 'normal',
        animations: [{
          selector: selector,
          keyframes: [{
            transform: transform ? transform : 'translateY(-30%)'
          }]
        }]
      }
    });
  }

}

var _default = ParallaxAnimation;
exports.default = _default;