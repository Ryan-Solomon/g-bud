import React, { FormEvent, useReducer, useState } from 'react';
import GroceryItem from './GroceryItem';

type TState = {
  items: TGroceryItem[];
};

export type TGroceryItem = {
  name: string;
  key: number;
};

const initialState: TState = {
  items: [],
};

type TAction =
  | {
      type: 'ADD_ITEM';
      payload: TGroceryItem;
    }
  | {
      type: 'REMOVE_ITEM';
      payload: TGroceryItem;
    }
  | {
      type: 'CLEAR_ITEMS';
    }
  | {
      type: 'EDIT_ITEM';
      payload: TGroceryItem;
    };

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        items: [
          ...state.items.filter((item) => item.key !== action.payload.key),
        ],
      };
    case 'CLEAR_ITEMS':
      return {
        items: [],
      };
    case 'EDIT_ITEM':
      return { ...state };
    default:
      throw new Error('wtf');
  }
};

const GroceryList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const addItem = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name: input,
        key: Math.random() * 10,
      },
    });
  };

  return (
    <main className='grocery-container'>
      <header className='title'>
        <h1>Groceries</h1>
      </header>
      <form onSubmit={addItem} className='input-form'>
        <label htmlFor='add-item'>Add Item</label>
        <input value={input} id='add-item' autoFocus type='text' />
        <button type='submit'>Add Item</button>
      </form>
      <section className='grocery-items'>
        {state.items.map((item) => {
          return <GroceryItem key={item.key} item={item} />;
        })}
      </section>
    </main>
  );
};

export default GroceryList;
