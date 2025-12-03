import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({shoppingItems, incrementCount, decrementCount, onRemoveItem}) => {
    return (
        <div>
            {shoppingItems.map((item) => (
                <ShoppingListItem key={item.id} item={item} incrementCount={incrementCount} decrementCount={decrementCount} onRemoveItem={onRemoveItem}/>
            ))}

        </div>
    );
}

export default ShoppingList;
