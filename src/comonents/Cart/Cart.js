import React from 'react';

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    console.log(props);

    return (
        <div>
            <h3>Add to Cart</h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;