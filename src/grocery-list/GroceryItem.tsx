import { readConfigFile } from 'typescript';

import React, { FC } from 'react';
import { TGroceryItem } from './GroceryList';
import './GroceryItem.styles.scss';

type Props = {
  item: TGroceryItem;
  removeItem: (item: TGroceryItem) => void;
};

const GroceryItem: FC<Props> = ({ item, removeItem }) => {
  const { name } = item;
  return (
    <div className='grocery-item'>
      <h3>{name}</h3>
      <div className='buttons'>
        <button>Edit</button>
        <button onClick={() => removeItem(item)}>Delete</button>
      </div>
    </div>
  );
};

export default GroceryItem;

// Add Clear and Edit Item
// Also, add routing to another page where you build a cart with context
// By fetching products
