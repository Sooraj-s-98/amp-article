"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Animation = _interopRequireDefault(require("../amp/Animation"));

var _AmpImage = _interopRequireDefault(require("../amp/AmpImage"));

var _PositionObserver = _interopRequireDefault(require("../amp/PositionObserver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BurgerIngredientWrapper = _styledComponents.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class BurgerIngredient extends React.Component {
  render() {
    const {
      id,
      src,
      width,
      height,
      left,
      top,
      keyframes,
      ...rest
    } = this.props;
    const imgProps = {
      src,
      width,
      height,
      id
    };
    return React.createElement(BurgerIngredientWrapper, rest, React.createElement(_AmpImage.default, _extends({}, imgProps, {
      layout: "fixed",
      style: {
        position: 'absolute',
        left: left,
        top: top
      }
    })), React.createElement(_PositionObserver.default, {
      id: `${id}Observer`,
      "instersection-ratios": "1",
      on: `scroll:${id}Anim.seekTo(percent=event.percent)`
    }), React.createElement(_Animation.default, {
      id: `${id}Anim`,
      animation: {
        duration: 1,
        fill: 'both',
        direction: 'normal',
        animations: [{
          selector: `#${id}`,
          keyframes: keyframes
        }]
      }
    }));
  }

}

var _default = BurgerIngredient;
exports.default = _default;