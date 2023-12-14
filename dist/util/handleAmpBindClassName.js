"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAmpBindClassName = void 0;

const handleAmpBindClassName = props => {
  const newProps = { ...props
  };
  const [injectedClassName] = /sc-.*/.exec(props.className);

  if (newProps['data-amp-bind-class']) {
    newProps['data-amp-bind-class'] = `(${newProps['data-amp-bind-class']}) + " ${injectedClassName}"`;
  }

  return newProps;
};

exports.handleAmpBindClassName = handleAmpBindClassName;