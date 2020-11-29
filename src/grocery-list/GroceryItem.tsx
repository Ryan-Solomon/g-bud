import { readConfigFile } from 'typescript';

import React, { FC } from 'react';

type Props = {
  item: string;
};

const GroceryItem: FC<Props> = ({ item = 'yoooo' }) => {
  return (
    <div className='grocery-item'>
      <h3>{item}</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default GroceryItem;
