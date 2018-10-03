import React, { Component } from 'react';
import { BodyCopy } from 'paidpost-core';

// import PropTypes from 'prop-types';
import scss from './CustomBodyCopy.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
class CustomBodyCopy extends Component {
  componentDidMount() {}

  render() {
    return (
      <BodyCopy className={classnames(scss.CustomBodyCopy, scss[`CustomBodyCopy${this.props.index}`],this.props.className)}>
        <h1 dangerouslySetInnerHTML={{ __html: this.props.title }} />
        <p dangerouslySetInnerHTML={{ __html: this.props.text }} />
        {this.props.children}
      </BodyCopy>
    );
  }
}

CustomBodyCopy.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

CustomBodyCopy.defaultProps = {
  className: undefined,
  title: undefined,
  text: undefined,
};

export default CustomBodyCopy;
