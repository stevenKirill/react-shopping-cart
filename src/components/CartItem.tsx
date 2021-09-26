import React from 'react';
import { IProduct } from '../interfaces/Cart';
import { Wrapper } from './CartItem.styles';
import { Button } from '@mui/material';

interface IProps {
    product: IProduct;
    removeFromCart: (id: number) => void;
    addToCart: (product: IProduct) => void;
};

const CartItem: React.FC<IProps> = ({ product, removeFromCart, addToCart }) => {
    const { title, price, image, id, amount } = product;
    return (
    <Wrapper>
            <div>
            <h3>{title}</h3>
            <div className='information'>
                <p>Price: ${price}</p>
                <p>Total: ${(amount * price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => removeFromCart(id)}
                >
                -
                </Button>
                <p>{amount}</p>
                <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => addToCart(product)}
                >
                +
                </Button>
            </div>
        </div>
        <img src={image} alt={title}/>
    </Wrapper>
    )
}

export default CartItem
