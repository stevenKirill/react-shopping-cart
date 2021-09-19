import React, { useState } from 'react';
import { useQuery } from 'react-query';
import services from './api/service';
import { IProduct } from './interfaces/Cart';
import Loader from './components/Loader';
//import ErrorIcon from '@mui/icons-material/Error';
import { AppWrapper, EmptyComponent, LoaderWrapper } from './App.styles';
import ProductCard from './components/ProductCard';
import { Drawer } from '@mui/material';
import Grid from '@mui/material/Grid';
import Cart from './components/Cart';

import './App.css';

function App() {
  const [isOpened,setIsOpened] = useState<boolean>(false)
  const { data, isLoading, error } = useQuery<IProduct[]>('products',services.getProducts);

  console.log(data,'=> data')
  
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
              <ProductCard item={item}/>
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
        <Cart/>
      </Drawer>
      {component}
    </AppWrapper>
  );
}

export default App;
