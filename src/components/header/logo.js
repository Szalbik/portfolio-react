import React from 'react';

const Logo = ({ text }) => <div className="logo">{text}</div>;

Logo.propTypes = {
  text: React.PropTypes.string.isRequired
}

Logo.defaultProps = {
  text: "Default text"
}

export default Logo;
