import { useState , useEffect} from 'react';
import React from 'react';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';
import list from './items.js';
import "./LogicalApp.css";


const LogicalApp = () => {

    const [input, setInput] = useState("");
    const [shoppingItems, setShoppingItems] = useState(localStorage.getItem("shoppingItems") ? JSON.parse(localStorage.getItem("shoppingItems")) : list);
    const [isError, setIsError] = useState(false);
    const [allCount, setAllCount] = useState();

    useEffect(() => {
      const total = shoppingItems.reduce((sum, item) => sum + item.count, 0);
      setAllCount(total);
    }, [shoppingItems]);

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onAddItem = (title) => {

        if(title.trim().length === 0){
            setIsError(true);
            return;
        }

        setIsError(false);

        const newItem = {
            id: Date.now(),
            title: title,
            count: 0,
            done: false
        };

        setShoppingItems([...shoppingItems, newItem]);
        localStorage.setItem("shoppingItems", JSON.stringify([...shoppingItems, newItem]));
    }

    const incrementCount = (id) => {
        const newItems = shoppingItems.map(item => {
            if(item.id === id){
                return {...item, count: item.count + 1};
            }
            return item;
        });

        setShoppingItems(newItems);
        localStorage.setItem("shoppingItems", JSON.stringify(newItems));
    }

    const decrementCount = (id) => {
        const newItems = shoppingItems.map(item => {
            if(item.id === id && item.count > 0){
                return {...item, count: item.count - 1};
            }

            return item;
        });

        
        setShoppingItems(newItems);
        localStorage.setItem("shoppingItems", JSON.stringify(newItems));
    }

    const onRemoveItem = (id) => {
        setShoppingItems(shoppingItems.filter(item => item.id !== id));

        localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems.filter(item => item.id !== id)));
    }

    return (
        <div className='logical-app'>
            <h2>Усього товарів: {allCount}</h2>
            <AddItemForm input={input} onInputChange={onInputChange} onAddItem={onAddItem}/>
            {isError && <div className="error">Назва товару не може бути порожньою</div>}
            <h2>Cписок покупок</h2>
            <ShoppingList shoppingItems={shoppingItems} onRemoveItem={onRemoveItem} incrementCount={incrementCount} decrementCount={decrementCount}/>
        </div>
    );
}

export default LogicalApp;
