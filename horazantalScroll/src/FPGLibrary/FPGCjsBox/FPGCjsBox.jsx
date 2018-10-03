import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGCjsBox.scss';

class FPGCjsBox extends Component {
  componentDidMount() {
    System.import('./_runtime.js').then(runtime => {
      runtime.default.call(this);
    });
  }

  render() {
    this.cjsName = this.props.cjsName;
    this.innerRender = this.props.innerRender;
    this.triggerPoint = this.props.triggerPoint;
    return (
      <div
        ref={el => {
          this.cjsCon = el;
        }}
        className={classnames(scss.FPGCjsBox, this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
}

FPGCjsBox.propTypes = {
  className: PropTypes.string,
  cjsName: PropTypes.string,
  innerRender: PropTypes.bool,
  triggerPoint: PropTypes.number,
  isControl: PropTypes.bool
};

FPGCjsBox.defaultProps = {
  className: undefined,
  cjsName: undefined,
  innerRender: false,
  triggerPoint: 0.4,
  isControl: false
};

export default FPGCjsBox;
