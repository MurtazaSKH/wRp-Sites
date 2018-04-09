import React from 'react';
import PropTypes from 'prop-types';

export default class Titlebar extends React.Component {
  render() {
    return (<div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>);
  }
};

Titlebar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

Titlebar.defaultProps = {
  title: 'Default'
};
