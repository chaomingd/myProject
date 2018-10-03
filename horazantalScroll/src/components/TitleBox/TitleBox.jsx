import React, { Component } from 'react';
import { BodyCopy } from 'paidpost-core';

// import PropTypes from 'prop-types';
import scss from './TitleBox.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
class TitleBox extends Component {
  componentDidMount() {}

  render() {
    return (
      <BodyCopy className={classnames(scss.TitleBox, scss[`TitleBox${this.props.index}`],this.props.className)}>
        <div className={classnames(scss.title,scss[`title${this.props.Textindex}`])}>
          <span dangerouslySetInnerHTML={{ __html: this.props.title }} />
        </div>
        <div className={classnames(scss.text,scss[`text${this.props.Textindex}`])}>
          <span dangerouslySetInnerHTML={{ __html: this.props.text }} />
        </div>
      </BodyCopy>
    );
  }
}

TitleBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  Textindex: PropTypes.number,
  text: PropTypes.string,
};

TitleBox.defaultProps = {
  className: undefined,
  title: undefined,
  Textindex: undefined,
  text: undefined,
};

export default TitleBox;
