import React, { FormEvent, useReducer, useState } from 'react';
import GroceryItem from './GroceryItem';
import './GroceryList.styles.scss';

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
      payload: { newItem: TGroceryItem; prevKey: number };
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
      const newItems = state.items.map((item) => {
        if (item.key === action.payload.prevKey) {
          return action.payload.newItem;
        } else {
          return item;
        }
      });

      return { ...state, items: newItems };
    default:
      throw new Error('wtf');
  }
};

const GroceryList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items') || '{}');
    if (items) {
      items.forEach((item: TGroceryItem) => {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            name: item.name,
            key: item.key,
          },
        });
      });
    }
  }, []);

  React.useEffect(() => {
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name: input,
        key: Math.random() * 10,
      },
    });
    setInput('');
  };

  const removeItem = (item: TGroceryItem) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  };

  const clearItem = () => {
    dispatch({
      type: 'CLEAR_ITEMS',
    });
  };

  const editItem = (item: TGroceryItem, prevKey: number) => {
    dispatch({
      type: 'EDIT_ITEM',
      payload: {
        newItem: item,
        prevKey,
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
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          id='add-item'
          autoFocus
          type='text'
        />
        <div className='button-container'>
          <button type='submit'>Add Item</button>

          <button onClick={clearItem} type='submit'>
            Clear Items
          </button>
        </div>
      </form>
      <section className='grocery-items'>
        {state.items.map((item) => {
          return (
            <GroceryItem
              editItem={editItem}
              removeItem={removeItem}
              key={item.key}
              item={item}
            />
          );
        })}
      </section>
    </main>
  );
};

export default GroceryList;
