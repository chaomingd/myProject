/* eslint-env browser */
import React from 'react';
import classNames from 'classnames';
import * as paidPostCore from 'paidpost-core';
import scss from './index.scss';

const mapImportsToWindow = importModule => {
  if (typeof importModule === 'object' && importModule !== null) {
    Object.keys(importModule).forEach(componentName => {
      window[componentName] = importModule[componentName];
    });
  }
};

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      javascriptDocument: 'React.createElement("div")',
    };
    this.assetAbsoluteUrls = {};
  }
  componentDidMount() {
    const self = this;

    window.React = React;

    mapImportsToWindow(paidPostCore);

    window.classNames = classNames;

    window.scss = scss;

    // can we remove this now that images go straight to ad-assets?
    window.require = path => this.assetAbsoluteUrls[path];
    // eslint-disable-next-line no-eval
    this.render = () => eval(this.state.javascriptDocument);

    function receiveMessage(msg) {
      if (msg.data && msg.data.javascriptDocument) {
        // can we remove this now that images go straight to ad-assets?
        msg.data.assetManifest.assets.forEach(asset => {
          self.assetAbsoluteUrls[asset.path] = `${
            msg.data.assetManifest.ppComposerApiUrl
          }/paidpost/${msg.data.postSlug}/asset/${asset.blobSha}`;
        });

        self.setState({
          javascriptDocument: msg.data.javascriptDocument,
        });

        parent.postMessage('RENDERED_AT_LEAST_ONCE', msg.origin);
      }
    }
    window.addEventListener('message', receiveMessage, false);

    /** * staging link mode stuff ** */

    const setPaidPostRenderFunction = renderFunction => {
      this.render = renderFunction.bind(this);
      this.forceUpdate();
    };
    if (window.paidPostRenderFunctionOrSetRenderFunction) {
      setPaidPostRenderFunction(window.paidPostRenderFunctionOrSetRenderFunction);
    } else {
      window.paidPostRenderFunctionOrSetRenderFunction = setPaidPostRenderFunction;
    }

    // this should be in index.html (tested as last child of <body>)
    //
    // function paidPostRenderFunction() { /* return React element tree */ }
    //
    // if(window.paidPostRenderFunctionOrSetRenderFunction) {
    //     window.paidPostRenderFunctionOrSetRenderFunction(paidPostRenderFunction);
    // }
    // else {
    //     window.paidPostRenderFunctionOrSetRenderFunction = paidPostRenderFunction;
    // }
  }
  render() {
    return <div />;
  }
}
