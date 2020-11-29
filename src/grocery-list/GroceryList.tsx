import React, { FormEvent, useState } from 'react';
import GroceryItem from './GroceryItem';

type TState = {
    items: TGroceryItem[]
}

type TGroceryItem = {
    name: string;
    key: number;
}

const initialState: TState = {
    items: [],
}



type TAction = {
    type: 'ADD_ITEM',
    payload: TGroceryItem,
} | {
    type: 'REMOVE_ITEM',
    payload: TGroceryItem
} | {
    type: 'CLEAR_ITEMS',
} | {
    type: 'EDIT_ITEM',
    payload: TGroceryItem
}



const reducer = (state: TState , action: TAction){
    switch (action.type) {
        case 'ADD_ITEM':
            return {}
        case 'REMOVE_ITEM':
            return {}
        case 'CLEAR_ITEMS':
            return {}
        case 'EDIT_ITEM':
            return {}
        default:
            throw new Error('wtf')
    }
}



const GroceryList = () => {
  const [listItem, setListItem] = useState('');

  const addItem = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className='grocery-container'>
      <header className='title'>
        <h1>Groceries</h1>
      </header>
      <form onSubmit={addItem} className='input-form'>
        <label htmlFor='add-item'>Add Item</label>
        <input value={listItem} id='add-item' autoFocus type='text' />
        <button type='submit'>Add Item</button>
      </form>
      <section className='grocery-items'>
        <GroceryItem item={listItem} />
      </section>
    </main>
  );
};

export default GroceryList;
