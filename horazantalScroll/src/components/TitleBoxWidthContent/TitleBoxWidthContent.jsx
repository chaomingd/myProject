import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './TitleBoxWidthContent.scss';

class TitleBoxWidthContent extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={classnames(scss.TitleBoxWidthContent, this.props.className)}>
        <div className={classnames(scss.contentBoxTest, this.props.contentClassName)}>
          <span dangerouslySetInnerHTML={{ __html: this.props.title }}></span>
        </div>
        <div className={classnames(scss.number)}>{this.props.number}</div>
        <div className={classnames(scss.text1)}>{this.props.text1}</div>
        <div
          className={classnames(scss.text2, scss[`copy${this.props.index}`])}
          dangerouslySetInnerHTML={{ __html: this.props.text2 }}
        />
        
      </div>
    );
  }
}

TitleBoxWidthContent.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  title: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

TitleBoxWidthContent.defaultProps = {
  className: '',
  title: '',
  contentClassName: '',
  text1: '',
  text2: '',
};

export default TitleBoxWidthContent;
