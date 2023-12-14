"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

var _BurgerIngredient = _interopRequireDefault(require("../../../../base/BurgerIngredient"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const BurgerContainer = _styledComponents.default.div`
  height: 1467px;
  position: relative;

  ${_device.device.below.tabletLandscape`
    max-width: 340px;
    margin: 0 auto;
  `};
`;

class FoodBurger extends React.Component {
  render() {
    return React.createElement(BurgerContainer, null, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.foodColoured,
      style: {
        position: 'absolute',
        top: 0,
        left: -40
      }
    }), React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.foodColoured,
      style: {
        position: 'absolute',
        top: 300,
        right: -90,
        transform: 'rotate(45deg)'
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerBun1",
      src: "/static/food/bun@2x.png",
      width: "311",
      height: "195",
      left: "50%",
      top: 1081,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -600%) rotate(15deg)'
      }, {
        offset: 0.1,
        transform: 'translate(-50%, -540%) rotate(15deg)'
      }, {
        offset: 0.2,
        transform: 'translate(-50%, -480%) rotate(0deg)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -200%) rotate(0deg)'
      }],
      style: {
        zIndex: 10
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerLettuce1",
      src: "/static/food/lettuce@2x.png",
      width: "310",
      height: "169",
      left: "50%",
      top: 1146,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -600%) rotate(25deg)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -100%) rotate(-15deg)'
      }],
      style: {
        zIndex: 9
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerBeef1",
      src: "/static/food/beef@2x.png",
      width: "269",
      height: "169",
      left: "50%",
      top: 1139,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -500%) rotate(-25deg)'
      }, {
        offset: 0.5,
        transform: 'translate(-50%, -300%) rotate(0deg)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -100%) rotate(-25deg)'
      }],
      style: {
        zIndex: 8
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerOnion1",
      src: "/static/food/onion@2x.png",
      width: "139",
      height: "74",
      left: "75%",
      top: 1189,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -600%) rotate(0)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -400%) rotate(0)'
      }],
      style: {
        zIndex: 7
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerTomato1",
      src: "/static/food/tomato@2x.png",
      width: "149",
      height: "91",
      left: "75%",
      top: 1198,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -450%) rotate(0)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -50%) rotate(0)'
      }],
      style: {
        zIndex: 6
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerOnion2",
      src: "/static/food/onion-alt@2x.png",
      width: "197",
      height: "106",
      left: "25%",
      top: 1220,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -450%) rotate(40deg)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -200%) rotate(-10deg)'
      }],
      style: {
        zIndex: 5
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerTomato2",
      src: "/static/food/tomato-alt@2x.png",
      width: "196",
      height: "118",
      left: "25%",
      top: 1286,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -350%) rotate(0)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -200%) rotate(0)'
      }],
      style: {
        zIndex: 5
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerLettuce2",
      src: "/static/food/lettuce-alt@2x.png",
      width: "298",
      height: "172",
      left: "50%",
      top: 1190,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -140%) rotate(-20deg)'
      }, {
        offset: 1,
        transform: 'translate(-50%, 0%) rotate(20deg)'
      }],
      style: {
        zIndex: 4
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerCheese",
      src: "/static/food/cheese@2x.png",
      width: "398",
      height: "230",
      left: "50%",
      top: 1157,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -200%) rotate(0)'
      }, {
        offset: 0.75,
        transform: 'translate(-50%, -0%) rotate(0)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -0%) rotate(0)'
      }],
      style: {
        zIndex: 3
      }
    }), React.createElement(_BurgerIngredient.default, {
      id: "burgerBeef2",
      src: "/static/food/beef-alt@2x.png",
      width: "312",
      height: "196",
      left: "50%",
      top: 1180,
      keyframes: [{
        offset: 0,
        transform: 'translate(-50%, -175%) rotate(0)'
      }, {
        offset: 0.5,
        transform: 'translate(-50%, -0%) rotate(0)'
      }, {
        offset: 1,
        transform: 'translate(-50%, -0%) rotate(0)'
      }],
      style: {
        zIndex: 2
      }
    }), React.createElement(_AmpImage.default, {
      layout: "fixed",
      width: "329",
      height: "196",
      src: "/static/food/bun-alt@2x.png",
      style: {
        position: 'absolute',
        zIndex: 1,
        left: '50%',
        top: '1235px',
        transform: 'translate(-50%, 0)'
      }
    }));
  }

}

var _default = FoodBurger;
exports.default = _default;