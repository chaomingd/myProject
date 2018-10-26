import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGCjsBox.scss';

class FPGCjsBox extends Component {
  componentDidMount() {
		this.loaded = true;
		if(!this.props.cjsName) return;
    import('./_runtime.js').then(runtime => {
      runtime.default.call(this);
    });
  }
	componentWillReceiveProps(nextProps) {
		if(!this.loaded) return;
		if(nextProps.cjsName !== this.props.cjsName){
			import('./_runtime').then(runtime => {
				runtime.willReaciveProps.call(this,nextProps);
			})
		}
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
        <canvas ref={el => {this.aniCanvas = el}}></canvas>
      </div>
    );
  }
}

FPGCjsBox.propTypes = {
  className: PropTypes.string,
  cjsName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
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
