import React, {useState} from 'react';

const ShoppingListItem = ({item, incrementCount, decrementCount, onRemoveItem}) => {

    const [itemCount, setItemCount] = useState(item.count);

    const onClickIncrement = () => {
        setItemCount(itemCount + 1);
        incrementCount(item.id);
    }

    const onClickDecrement = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1);
            decrementCount(item.id);
        }
    }

    return (
        <div className='shopping-list-item'>
          <span>{item.title}</span>
          <div className='activeListItemPart'>
            <button className='count-part active-button' onClick={onClickDecrement}>-</button>
            <span className='count-part'>{itemCount}</span>
            <button className='count-part active-button' onClick={onClickIncrement}>+</button>
            <button class="icon-btn" id="deleteBtn" onClick={() => onRemoveItem(item.id)}>
                🗑️
            </button>
          </div>
      </div>
    );
}

export default ShoppingListItem;
