"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _device = require("../../../../../util/device");

var _AmpImage = _interopRequireDefault(require("../../../../amp/AmpImage"));

var _ParallaxAnimation = _interopRequireDefault(require("../../../../amp/ParallaxAnimation"));

var _PositionObserver = _interopRequireDefault(require("../../../../amp/PositionObserver"));

var _Container = _interopRequireDefault(require("../../../../base/Container"));

var _Text = _interopRequireDefault(require("../../../../base/Text"));

var _Grid = _interopRequireDefault(require("../../../../base/Grid"));

var _Confetti = _interopRequireWildcard(require("../../../../base/Confetti"));

var _Coin = _interopRequireDefault(require("../../../../base/Coin"));

var _Bill = _interopRequireDefault(require("../../../../base/Bill"));

var _MobilePadding = _interopRequireDefault(require("../../../../base/MobilePadding"));

var _SpendingMachine = _interopRequireDefault(require("./SpendingMachine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SpendingSection = _styledComponents.default.section`
  background: ${({
  theme
}) => theme.colors.aquaIsland}
    url('/static/spending/bills-stack@2x.png') no-repeat;
  background-position: center bottom;
  background-size: contain;
  color: ${({
  theme
}) => theme.colors.eden};
  position: relative;
  padding: 500px 0 0;

  ${_device.device.below.tabletLandscape`
    background-size: 180vh;
  `}
`;
const SpendingMachineContainer = _styledComponents.default.div`
  position: absolute;
  top: -250px;
  left: 50%;
  transform: translateX(-50%);
`;
const Title = (0, _styledComponents.default)(_Text.default.Title)`
  font-size: 120px;
  ${_device.device.below.tabletLandscape`
    text-align: center;
    font-size: 22vw;
  `};
`;
const Ticket = _styledComponents.default.div`
  background: url('/static/spending/ticket@2x.png') 0 0 no-repeat;
  background-size: contain;
  font-family: 'IBM Plex Mono';
  max-width: 833px;
  margin: 100px auto 0 auto;
  padding: 160px 80px 160px 150px;
  z-index: 2;
  position: relative;

  ${_device.device.below.tabletLandscape`
    background-image: url('/static/spending/ticket-mobile@2x.png');
    background-color: #fff;
    background-size: cover;
    padding: 160px 25px;
  `};
`;
const TicketItem = _styledComponents.default.div`
  line-height: 1.3em;
  max-width: 375px;
  margin: 0 auto;
  padding: 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: 0px none;
  }
`;
const TicketTitle = _styledComponents.default.div`
  font-size: 24px;
  color: ${({
  theme
}) => theme.colors.black};
  letter-spacing: 0.7px;
  margin-bottom: 10px;
`;
const TicketSubtitle = _styledComponents.default.div`
  font-size: 18px;
  color: ${({
  theme
}) => theme.colors.black};
  opacity: 0.5;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;
const TicketCost = _styledComponents.default.div`
  font-size: 32px;
  color: ${({
  theme
}) => theme.colors.persimmon};
  letter-spacing: 0.9px;
  ${_device.device.below.tabletPortrait`font-size: 7vw;`}
`;
const TicketBill = (0, _styledComponents.default)(_Bill.default)`
  position: absolute;
  z-index: 1;
  bottom: 290px;
  left: 23%;
  ${_device.device.below.tabletLandscape`
    bottom: 65px;
  `}
`;
const BankContainer = _styledComponents.default.div`
  position: relative;
  height: 1000px;
  ${_device.device.below.tabletLandscape`
    height: 150vh;
  `}
`;
const BankImage = (0, _styledComponents.default)(_AmpImage.default)`
  position: absolute;
  left: 55%;
  top: -200px;
  z-index: 6;

  ${_device.device.below.tabletLandscape`
    left: 25%;
    top: 100px;
    zoom: 0.7;
  `}
`;
const Bill1 = _styledComponents.default.div`
  position: absolute;
  top: 36%;
  left: 17%;
  z-index: 2;

  ${_device.device.below.tabletLandscape`
    top: 70%;
    left: -17%;
    zoom: 0.8;
  `}
`;
const Bill2 = _styledComponents.default.div`
  position: absolute;
  top: 140px;
  left: 74%;
  z-index: 1;

  ${_device.device.below.tabletLandscape`
    top: 22%;
    left: -27%;
  `}
`;
const Bill3 = _styledComponents.default.div`
  position: absolute;
  top: 54%;
  left: 68%;
  z-index: 2;

  ${_device.device.below.tabletLandscape`
    top: 35%;
    left: 77%;
  `}
`;

class Spending extends React.Component {
  render() {
    return React.createElement(SpendingSection, null, React.createElement(_Container.default, null, React.createElement(SpendingMachineContainer, null, React.createElement(_SpendingMachine.default, null)), React.createElement(_Grid.default, {
      style: {
        position: 'relative',
        zIndex: '3'
      }
    }, React.createElement(_Grid.default.Col, {
      cols: 2,
      offset: 2,
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      style: {
        position: 'absolute',
        left: 10,
        top: 125
      },
      color: "persimmon"
    })), React.createElement(_Grid.default.Col, {
      cols: 5,
      colsAtTabletLandscape: 12,
      style: {
        marginTop: '60px'
      }
    }, React.createElement(Title, {
      style: {
        color: '#fff'
      }
    }, "SPENDING"), React.createElement(Title, null, "HABITS")), React.createElement(_Grid.default.Col, {
      cols: 3,
      hideFor: _device.device.below.tabletLandscape
    }, React.createElement(_Confetti.default, {
      pieces: _Confetti.presets.basic,
      style: {
        position: 'absolute',
        left: -40,
        top: 95,
        transform: 'rotate(120deg)'
      },
      color: "persimmon"
    }))), React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement(Ticket, {
      v: 20,
      h: 10,
      id: "ticket"
    }, React.createElement(_PositionObserver.default, {
      id: "ticketObserver",
      "instersection-ratios": "1",
      on: "scroll:ticketParallaxAnim.seekTo(percent=event.percent)"
    }), React.createElement(_ParallaxAnimation.default, {
      id: "ticketParallaxAnim",
      selector: "#ticket"
    }), React.createElement(TicketItem, null, React.createElement(TicketTitle, null, "Total Spending"), React.createElement(TicketSubtitle, null, "each year in the US"), React.createElement(TicketCost, null, "$600,000,000,000")), React.createElement(TicketItem, null, React.createElement(TicketTitle, null, "Total Spending"), React.createElement(TicketSubtitle, null, "each year in the US"), React.createElement(TicketCost, null, "$600,000,000,000")), React.createElement(TicketItem, null, React.createElement(TicketTitle, null, "Student Loan debt"), React.createElement(TicketSubtitle, null, "Student loan debt in the US"), React.createElement(TicketCost, null, "$1,000,000,000,000")), React.createElement(TicketItem, null, React.createElement(TicketTitle, null, "Average Yearly Income"), React.createElement(TicketSubtitle, null, "before taxes"), React.createElement(TicketCost, null, "$56,099")), React.createElement(TicketItem, null, React.createElement(TicketTitle, null, "Yearly Expenditure"), React.createElement(TicketSubtitle, null, "on average"), React.createElement(TicketCost, null, "$47,112"))), React.createElement(TicketBill, {
      size: 310,
      angle: 109
    })), React.createElement(_Grid.default, null, React.createElement(_Grid.default.Col, {
      cols: 4,
      offset: 2,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, {
      style: {
        paddingTop: '80px',
        textAlign: 'left'
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor justo, facilisis id lobortis ac, elementum et sem. Nam quis turpis eget ipsum fermentum malesuada. Praesent ante metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc ut ante consequat, at suscipit sapien volutpat. Donec sit amet ante ut tellus vulputate lobortis blandit mollis enim. Donec vel elit hendrerit, congue metus nec, sagittis nibh. Maecenas non tincidunt sapien, ac ullamcorper nulla. Pellentesque egestas cursus neque quis cursus. Aenean non rhoncus turpis. Integer nec mi consequat, tempor nisl sit amet, interdum lectus. Vivamus consequat sapien quis mi sagittis congue. Sed mollis ut risus a faucibus."))), React.createElement(_Grid.default.Col, {
      cols: 4,
      offset: 1,
      colsAtTabletLandscape: 12,
      offsetAtTabletLandscape: 0
    }, React.createElement(_MobilePadding.default, null, React.createElement(_Text.default.P, {
      style: {
        textAlign: 'left'
      }
    }, "Aenean pharetra convallis nisl, vel rhoncus lectus tempus a. Cras lectus nisl, lobortis eget ipsum quis, mattis sollicitudin lectus. Duis auctor ligula leo. Aliquam finibus sed est nec ornare. Duis tincidunt nisi non facilisis lacinia. Nam fermentum, enim non placerat euismod, magna massa commodo dui, in convallis ipsum diam lobortis velit. Cras volutpat facilisis felis at volutpat.")))), React.createElement(BankContainer, null, React.createElement(_PositionObserver.default, {
      id: "piggyBankObserver",
      "instersection-ratios": "1",
      on: " scroll:piggyBankAnim.seekTo(percent=event.percent), bill1Anim.seekTo(percent=event.percent), bill2Anim.seekTo(percent=event.percent), coin1Anim.seekTo(percent=event.percent), bill3Anim.seekTo(percent=event.percent), coin2Anim.seekTo(percent=event.percent) "
    }), React.createElement(BankImage, {
      id: "piggyBank",
      layout: "fixed",
      width: "443",
      height: "458",
      src: "/static/spending/piggy-bank@2x.png"
    }), React.createElement(_ParallaxAnimation.default, {
      id: "piggyBankAnim",
      selector: "#piggyBank",
      transform: "translateY(-50%)"
    }), React.createElement(Bill1, {
      id: "bill1"
    }, React.createElement(_Bill.default, {
      size: 443,
      angle: 96
    }), React.createElement(_ParallaxAnimation.default, {
      id: "bill1Anim",
      selector: "#bill1",
      direction: "reverse",
      transform: "translateY(-100%)"
    })), React.createElement(Bill2, {
      id: "bill2"
    }, React.createElement(_Bill.default, {
      size: 215,
      angle: -120
    }), React.createElement(_ParallaxAnimation.default, {
      id: "bill2Anim",
      selector: "#bill2",
      direction: "reverse",
      transform: "translateY(-200%)"
    })), React.createElement(Bill3, {
      id: "bill3"
    }, React.createElement(_Bill.default, {
      size: 320,
      angle: 125
    }), React.createElement(_ParallaxAnimation.default, {
      id: "bill3Anim",
      selector: "#bill3",
      transform: "translateY(100%) rotate(40deg)"
    })), React.createElement("div", {
      id: "coin1",
      style: {
        position: 'absolute',
        top: '27%',
        left: '19%',
        zIndex: '1'
      }
    }, React.createElement(_Coin.default, {
      size: 119,
      angle: -12
    }), React.createElement(_ParallaxAnimation.default, {
      id: "coin1Anim",
      selector: "#coin1",
      transform: "translateY(500px)"
    })), React.createElement("div", {
      id: "coin2",
      style: {
        position: 'absolute',
        top: 100,
        left: '58%',
        zIndex: 5
      }
    }, React.createElement(_Coin.default, {
      size: 125,
      angle: -143
    }), React.createElement(_ParallaxAnimation.default, {
      id: "coin2Anim",
      selector: "#coin2",
      transform: "translateY(1000px)"
    })), React.createElement("div", {
      id: "coin3",
      style: {
        position: 'absolute',
        top: '27%',
        left: '56%',
        zIndex: '2'
      }
    }, React.createElement(_Coin.default, {
      size: 125,
      angle: 0
    })), React.createElement("div", {
      id: "coin5",
      style: {
        position: 'absolute',
        top: '54%',
        left: '60%',
        zIndex: '1'
      }
    }, React.createElement(_Coin.default, {
      size: 125,
      angle: 34
    })), React.createElement("div", {
      id: "coin6",
      style: {
        position: 'absolute',
        top: '92%',
        left: '54%',
        zIndex: '1'
      }
    }, React.createElement(_Coin.default, {
      size: 125,
      angle: 10
    })))));
  }

}

var _default = Spending;
exports.default = _default;