import React from 'react';
import { IProduct } from '../interfaces/Cart';
import { CardWrapper } from './ProductCard.styles';
import { Button } from '@mui/material';

interface Props {
    item: IProduct,
    hadleAddProduct: (product: IProduct) => void;
};

const ProductCard = (props: Props) => {
    const { hadleAddProduct, item } = props;
    const { image, description, title, price } = item;
    return (
        <CardWrapper>
        <img src={image} alt={title}/>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
        <Button onClick={() => hadleAddProduct(item)}>Add to cart</Button>
        </CardWrapper>
    )
}

export default ProductCard
