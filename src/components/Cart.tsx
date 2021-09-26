import React from 'react';
import { IProduct } from '../interfaces/Cart';
import Wrapper from './Cart.styles';
import CartItem from './CartItem';

interface IProps {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<IProps> = ({ cartItems, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <h3>Your shopping cart</h3>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(product => {
                return (
                    <CartItem
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                )
            })}
            <h2>Total: </h2>
        </Wrapper>
    )
}

export default Cart
