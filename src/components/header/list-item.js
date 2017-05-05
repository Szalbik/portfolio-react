import React from 'react';
import './style.css';

const ListItem = ({ text }) => <li className="list-item">{text}</li>;

ListItem.propTypes = {
  text: React.PropTypes.string.isRequired
}

ListItem.defaultProps = {
  text: "Item"
}

export default ListItem;
