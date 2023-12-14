"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _urlJoin = _interopRequireDefault(require("url-join"));

var _Page = _interopRequireDefault(require("../component/static/Page"));

var _AppRoot = _interopRequireDefault(require("../component/root/AppRoot"));

var _SidebarRoot = _interopRequireDefault(require("../component/root/SidebarRoot"));

var _cleanCss = _interopRequireDefault(require("clean-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const renderPage = props => {
  return _server.default.renderToStaticMarkup(_react.default.createElement(_Page.default, _extends({
    rootElementId: _AppRoot.default.rootElementId
  }, props)));
};

const cssCleaner = new _cleanCss.default({
  level: {
    1: {
      all: true,
      roundingPrecision: 5,
      transform: (name, value) => {
        // ULTIMATE CSS SPACE SAVINGS FOR AMP CSS LIMIT!
        // May or may not break browsers. Please convince AMP friends
        // to not count prefixed properties/values against the mighty
        // byte limit.
        if (/^-(webkit|moz|ms)/.exec(name) || /^-(webkit|moz|ms)/.exec(value) && !/sticky/.exec(value)) {
          return false;
        }

        return value;
      }
    },
    2: {
      all: true,
      removeUnusedAtRules: false
    }
  }
});

const formatStyleElements = elems => {
  return elems.map(elem => {
    const css = elem.props.dangerouslySetInnerHTML.__html.replace(/\/\*[^*]+\*\//g, '').replace(/\}[\n\r\s]+(\S)/gm, (_, v) => `}${v}`).trim();

    const result = cssCleaner.minify(css.toString());
    const out = result.styles;
    return out;
  });
};

const render = async ({
  path,
  locale
}) => {
  const sheet = new _styledComponents.ServerStyleSheet();
  const routerContext = {};
  const webUrl = process.env.WEB_URL || 'http://localhost';

  const markup = _server.default.renderToStaticMarkup(_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: path,
    context: routerContext
  }, _react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, _react.default.createElement(_AppRoot.default, {
    locale: locale
  }))));

  const sidebarMarkup = _server.default.renderToStaticMarkup(_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, _react.default.createElement(_SidebarRoot.default, {
    locale: locale
  })));

  const [headCss, animationsCss] = formatStyleElements(sheet.getStyleElement());
  const page = renderPage({
    locale,
    head: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("link", {
      rel: "canonical",
      href: (0, _urlJoin.default)(webUrl, path)
    }), _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: headCss
      }
    })),
    footer: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "amp-keyframes": "",
      dangerouslySetInnerHTML: {
        __html: animationsCss
      }
    })),
    markup,
    sidebarMarkup
  });
  return {
    status: 200,
    markup: `<!DOCTYPE html>${page}`,
    headers: {
      'Content-Language': locale,
      'Content-Type': 'text/html; charset=utf-8'
    }
  };
};

var _default = render;
exports.default = _default;