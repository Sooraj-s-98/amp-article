"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Import modules ==============================================================
const getLanguageFromLocale = locale => {
  const [language] = locale.split('-');
  return language;
};

class Page extends React.PureComponent {
  render() {
    const {
      markup,
      sidebarMarkup,
      head,
      footer,
      locale
    } = this.props;
    const lang = getLanguageFromLocale(locale);
    return React.createElement("html", {
      amp: "true",
      lang: lang
    }, React.createElement("head", null, React.createElement("title", null, "Mood | Breaking the Status Quo"), React.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: "/static/favicon.png"
    }), React.createElement("meta", {
      charSet: "utf-8"
    }), React.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), React.createElement("meta", {
      content: "width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1",
      name: "viewport"
    }), React.createElement("meta", {
      content: "yes",
      name: "apple-mobile-web-app-capable"
    }), head, React.createElement("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400",
      rel: "stylesheet"
    }), React.createElement("link", {
      href: "https://fonts.googleapis.com/css?family=Oswald:300,700",
      rel: "stylesheet"
    }), React.createElement("link", {
      href: "https://fonts.googleapis.com/css?family=Abril+Fatface",
      rel: "stylesheet"
    }), React.createElement("link", {
      href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400",
      rel: "stylesheet"
    }), React.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-bind",
      src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-list",
      src: "https://cdn.ampproject.org/v0/amp-list-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-template": "amp-mustache",
      src: "https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-sidebar",
      src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-access",
      src: "https://cdn.ampproject.org/v0/amp-access-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-analytics",
      src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-selector",
      src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-live-list",
      src: "https://cdn.ampproject.org/v0/amp-live-list-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-fit-text",
      src: "https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-social-share",
      src: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-position-observer",
      src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-animation",
      src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-youtube",
      src: "https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-orientation-observer",
      src: "https://cdn.ampproject.org/v0/amp-orientation-observer-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-carousel",
      src: "https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-accordion",
      src: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-twitter",
      src: "https://cdn.ampproject.org/v0/amp-twitter-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-instagram",
      src: "https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-lightbox",
      src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
    }), React.createElement("script", {
      async: true,
      "custom-element": "amp-video",
      src: "https://cdn.ampproject.org/v0/amp-video-0.1.js"
    }), React.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'
      }
    }), React.createElement("noscript", null, React.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}'
      }
    }))), React.createElement("body", {
      dangerouslySetInnerHTML: {
        __html: markup + sidebarMarkup + _server.default.renderToStaticMarkup(footer)
      }
    }));
  }

}

var _default = Page;
exports.default = _default;