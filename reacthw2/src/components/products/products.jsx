import React from 'react';
import Product from './product';
import list from './data';
import './products.css';

const Products = () => {
    return (
        <div className='container'>
            <h1>Products</h1>
            
            <div className='products'>
                {
                    list.map((product) => <Product key={product.id} product={product}/>)
                }
            </div>
        </div>
    ); 
}

export default Products;
