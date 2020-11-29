import React from 'react';

const GroceryList = () => {
  return (
    <main className='grocery-container'>
      <header className='title'>
        <h1>Groceries</h1>
      </header>
      <section className='input'>
        <label htmlFor='add-item'>Add Item</label>
        <input id='add-item' autoFocus type='text' />
      </section>
      <section className='grocery-items'>
        <GroceryItem />
      </section>
    </main>
  );
};

export default GroceryList;
