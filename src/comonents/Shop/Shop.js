import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Prodcut from '../Product/Prodcut';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Prodcut 
                    key ={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Prodcut>)
                }
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;