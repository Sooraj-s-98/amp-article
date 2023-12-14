"use strict";

var _midori = require("midori");

var _path = _interopRequireDefault(require("path"));

var _random = _interopRequireDefault(require("random"));

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_random.default.use('xor128', 'amp-seed');

const accessControl = (0, _midori.url)(url => {
  return (0, _midori.header)('AMP-Access-Control-Allow-Source-Origin', url.origin);
});
const cors = (0, _midori.header)('Access-Control-Allow-Origin', '*');

const json = data => (0, _midori.send)(200, {
  'Content-Type': 'application/json'
}, JSON.stringify(data));

const app = (0, _midori.compose)((0, _midori.use)('/pingback', accessControl, (0, _midori.send)(200, '')), (0, _midori.use)('/authorization', accessControl, json({})), (0, _midori.use)('/static', cors, (0, _midori.serve)({
  root: _path.default.join(__dirname, '..', '..', 'static')
})), (0, _midori.apply)(_midori.request, _midori.url, async (req, {
  path
}) => {
  const {
    status,
    headers,
    markup
  } = await (0, _render.default)({
    path,
    locale: 'en-US'
  });
  return (0, _midori.send)(status, headers, markup);
}));
const port = process.env.PORT || 8080;
(0, _midori.listen)(app, port);