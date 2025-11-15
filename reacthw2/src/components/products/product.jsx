import React from 'react';

const Product = ({product}) => {
    return (
        <div className='product'>
            <h3 className='product-title'>{product.title}</h3>
            <img src={product.src} alt="" />
            <p className="price">{product.price}</p>
            <p className="new-price">{product.newPrice}</p>
            <p className='delivery'>{product.delivery}</p>
        </div>
    );
}

export default Product;
