import { readConfigFile } from 'typescript';

import React, { FC, useState } from 'react';
import { TGroceryItem } from './GroceryList';
import './GroceryItem.styles.scss';

type Props = {
  item: TGroceryItem;
  removeItem: (item: TGroceryItem) => void;
  editItem: (item: TGroceryItem, prevKey: number) => void;
};

const GroceryItem: FC<Props> = ({ item, removeItem, editItem }) => {
  const { name } = item;
  const [showInput, setShowInput] = useState(false);
  const [editInput, setEditInput] = useState('');

  return (
    <div className='grocery-item'>
      <h3>{name}</h3>
      <div className='buttons'>
        <button onClick={() => setShowInput(!showInput)}>Edit</button>
        <button onClick={() => removeItem(item)}>Delete</button>
      </div>
      {showInput && (
        <div className='edit-container'>
          <label htmlFor='edit'>Edit Item</label>
          <input
            onChange={(e) => setEditInput(e.target.value)}
            type='text'
            value={editInput}
            name='edit'
            id='edit'
          />
          <button
            onClick={(e) =>
              editItem(
                {
                  name: editInput,
                  key: Math.random() * 10,
                },
                item.key
              )
            }
          >
            Submit Change
          </button>
        </div>
      )}
    </div>
  );
};

export default GroceryItem;

// Also, add routing to another page where you build a cart with context
// By fetching products
