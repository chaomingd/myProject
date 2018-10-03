import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGParallax.scss';

class FPGParallax extends Component {
  componentDidMount() {
    System.import('./_runtime.js').then(runtime => {
      runtime.default.call(this);
    });
  }

  render() {
    return (
      <div
        ref={el => {
          this.animContainer = el;
        }}
        className={classnames(scss.FPGParallax, this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
}

FPGParallax.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  startY: PropTypes.number,
  endY: PropTypes.number,
  startX: PropTypes.number,
  endX: PropTypes.number,
  ease: PropTypes.number,
  triggerPoint: PropTypes.number,
};

FPGParallax.defaultProps = {
  className: undefined,
  startY: 0,
  endY: 0,
  startX: 0,
  endX: 0,
  ease: 0.2,
  triggerPoint: 1,
};

export default FPGParallax;
