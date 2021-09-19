import React from 'react';
import { IProduct } from '../interfaces/Cart';
import { CardWrapper, Image, Title, Description, Price, CardButton } from './ProductCard.styles';

interface Props {
    item: IProduct
};

const ProductCard = (props: Props) => {
    console.log(props,'=> props')
    const { image, category, description, rating, title, price } = props.item;
    return (
        <CardWrapper>
            <Image src={image}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price>${price}</Price>
            <CardButton>Add to cart</CardButton>
        </CardWrapper>
    )
}

export default ProductCard
