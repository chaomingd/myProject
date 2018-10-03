import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGAnimator.scss';

let runtimeObj;

class FPGAnimator extends Component {
  componentDidMount() {
    System.import('./_runtime.js').then(runtime => {
      runtimeObj = runtime;

      runtimeObj.default.init(this, this.props.triggerPoint);
    });
  }

  render() {
    const props = {};

    Object.keys(this.props).forEach(key => {
      if (FPGAnimator.propTypes && FPGAnimator.propTypes[key] === undefined) {
        props[key] = this.props[key];
      }
    });

    return React.createElement(
      this.props.tag,
      {
        ...props,
        ref: 'root',
        className: classnames(scss.FPGAnimator, this.props.className),
        'data-animator': '',
        [`data-${this.props.aniType}`]: '',
      },
      this.props.children,
    );
  }
}

FPGAnimator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  tag: PropTypes.string.isRequired,
  triggerPoint: PropTypes.number,
  aniType: PropTypes.oneOf(['custom', 'fade', 'fade-bottom', 'fade-left', 'fade-right']),
};

FPGAnimator.defaultProps = {
  className: undefined,
  tag: 'div',
  triggerPoint: 0.9,
  aniType: 'fade-bottom',
};

export default FPGAnimator;
