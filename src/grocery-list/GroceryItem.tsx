import { readConfigFile } from 'typescript';

import React, { FC } from 'react';
import { TGroceryItem } from './GroceryList';

type Props = {
  item: TGroceryItem;
};

const GroceryItem: FC<Props> = ({ item: { name } }) => {
  return (
    <div className='grocery-item'>
      <h3>{name}</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default GroceryItem;
