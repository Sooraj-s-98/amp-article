"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _device = require("../../util/device");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Grid & Columns
 * References sizes in ../Device.js
 *
 * Prop `hideFor` accepts `device.above.x` or `device.below.x` breakpoints
 * Column sizing is applied via `colsAtX` where `X` is one of `device.sizes`.
 *
 * Usage:
 *
 *  <Grid
 *    alignItems="center"
 *    justifyContent="flex-end"
 *    textAlign="center"
 *    debug="true"
 *    hideFor={device.above.tabletLandscape}
 *    showFor={device.above.Phone}
 *  >
 *    <Grid.Col
 *      textAlign="right"
 *      justifySelf="flex-start"
 *      hideFor={device.above.tabletLandscape}
 *      showFor={device.above.Phone}
 *      cols={6}
 *      colsAtPhone={12}
 *      offset={2}
 *      coffsetAtPhone={1}
 *    >
 *    </Grid.Col>
 *  </Grid>
 *
 */
const calc = (colSpan, columns) => colSpan * 100 / columns;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const sizeKeys = Object.keys(_device.device.sizes).sort((a, b) => {
  return _device.device.sizes[b] - _device.device.sizes[a];
});
const Col = (0, _styledComponents.default)(props => {
  const realProps = (0, _ramda.omit)(['cols', 'offset', 'textAlign', 'hideFor', 'showFor', 'justifySelf', ...sizeKeys.map(size => `colsAt${capitalize(size)}`), ...sizeKeys.map(size => `offsetAt${capitalize(size)}`)], props);
  return React.createElement("div", realProps);
})`
  position: relative;
  display: inline-block;
  width: ${({
  cols
}) => calc(cols, 12).toString().length > 6 ? `calc(100%/12*${cols});` : `${calc(cols, 12)}%`}
    ${({
  offset
}) => offset ? `margin-left: calc(100%/12*${offset});` : ''};
  vertical-align: top;
  padding: 16px;
  zoom: 1;
  ${({
  textAlign
}) => textAlign ? `text-align: ${textAlign};` : ''};
  ${({
  justifySelf
}) => justifySelf ? `justify-self: ${justifySelf};` : ''};
  ${({
  hideFor
}) => hideFor ? hideFor`display: none;` : ''};

  ${props => {
  return sizeKeys.map(size => {
    const key = `colsAt${capitalize(size)}`;

    if (typeof props[key] === 'number') {
      return _device.device.below[size]`
          width: ${calc(props[key], 12)}%;
        `;
    }

    return '';
  });
}};

  ${props => {
  return sizeKeys.map(size => {
    const key = `offsetAt${capitalize(size)}`;

    if (typeof props[key] === 'number') {
      return _device.device.below[size]`
          margin-left: ${calc(props[key], 12)}%;
        `;
    }

    return '';
  });
}};
`;
const Grid = _styledComponents.default.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  position: relative;
  margin: -16px;
  ${({
  alignItems
}) => alignItems ? `align-items: ${alignItems};` : ''}
  ${({
  justifyContent
}) => justifyContent ? `justify-content: ${justifyContent};` : ''};
  ${({
  debug
}) => debug ? '& > * { outline: 1px solid; }' : ''};
  ${({
  hideFor
}) => hideFor ? hideFor`display: none;` : ''};
`;
Grid.Col = Col;
var _default = Grid;
exports.default = _default;