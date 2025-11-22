import React from 'react';

const AddItemForm = ({input, onInputChange, onAddItem}) => {

    return (
      <div>
        <input type="text" value={input} onChange={onInputChange} placeholder='Назва товару'/>
        <button className="active-button" onClick={() => onAddItem(input)}>Додати</button>
      </div>
    );
}

export default AddItemForm;
