import React from 'react';
import './style.css';
import ListItem from './list-item';

const ListItems = () => {
  return (
    <ul className='list-items'>
      <ListItem />
      <ListItem text="Item 1" />
      <ListItem text="Item 2" />
      <ListItem text="Item 3" />
      <ListItem text="Item 4" />
      <ListItem text="Item 5" />
    </ul>
  )
}

export default ListItems;
