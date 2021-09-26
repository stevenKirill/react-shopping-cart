import React, { useState } from 'react';
import { useQuery } from 'react-query';
import services from './api/service';
import { IProduct } from './interfaces/Cart';
import Loader from './components/Loader';
//import ErrorIcon from '@mui/icons-material/Error';
import { AppWrapper, EmptyComponent, LoaderWrapper, StyledButton } from './App.styles';
import ProductCard from './components/ProductCard';
import { Drawer } from '@mui/material';
import Grid from '@mui/material/Grid';
import Cart from './components/Cart';
import { Badge } from '@mui/material';
import { AddShoppingCart } from '@material-ui/icons'

import './App.css';

function App() {
  const [isOpened,setIsOpened] = useState<boolean>(false);
  const [cartItems,setCartItems] = useState<IProduct[]>([]);
  const { data, isLoading, error } = useQuery<IProduct[]>('products',services.getProducts);

  const addProduct = (product: IProduct): void => {
    setCartItems(prev => {
      const current = prev.find(el => el.id === product.id);

      if (current) {
        return prev.map(el => {
          return el.id === product.id ? { ...el, amount: el.amount + 1 } : el;
        })
      } else {
        return [...prev, { ...product, amount: 1 }]
      }
    })
  };

  const removeProduct = (id: number) => {
    setCartItems(prev => {
      return prev.reduce((items, item) => {
        if (item.id === id) {
          if (item.amount === 1)
            return items;
          return [...items, { ...item, amount: item.amount - 1 }];
        } else {
          return [...items, item];
        }
      }, [] as IProduct[]);
    })
  };

  const countProducts = (): number => {
    return cartItems.length;
  };
  
  let component = null;
  if (isLoading) {
    component = (
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper>
    )
  } else if (!isLoading && error) {
    component = <div>Error</div>
  } else if (data?.length === 0) {
    component = <EmptyComponent>no data</EmptyComponent>
  } else {
    component = (
      <Grid container spacing={3}>
        {
        data?.map((item: IProduct)  => {
          return (
              <Grid key={item.id} xs={12} sm={4}>
                <ProductCard item={item} hadleAddProduct={addProduct}/>
              </Grid>
          )
        })
        }

    </Grid>
    )
  }
  return (
    <AppWrapper>
      <Drawer anchor="right" open={isOpened} onClose={() => setIsOpened(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={addProduct}
          removeFromCart={removeProduct}
        />
      </Drawer>
      <StyledButton onClick={() => setIsOpened(true)}>
      <Badge color="error" badgeContent={countProducts()}>
        <AddShoppingCart/>
      </Badge>
      </StyledButton>
      {component}
    </AppWrapper>
  );
}

export default App;
