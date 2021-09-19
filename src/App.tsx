import React, { useState } from 'react';
import { useQuery } from 'react-query';
import services from './api/service';
import { ICart } from './interfaces/Cart';
import Loader from './components/Loader';
//import ErrorIcon from '@mui/icons-material/Error';
import { AppWrapper, EmptyComponent } from './App.styles';
import ProductCard from './components/ProductCard';
import Grid from '@mui/material/Grid';

import './App.css';

function App() {
  const [products,setProducts] = useState<ICart[]>([]);
  const { data, isLoading, error } = useQuery<ICart[]>('products',services.getProducts);
  
  console.log(data, isLoading, error)
  let component = null;
  if (isLoading) {
    component = <Loader/>
  } else if (!isLoading && error) {
    component = <div>Error</div>
  } else if (data?.length === 0) {
    component = <EmptyComponent>no data</EmptyComponent>
  } else {
    component = (
      data?.map(item => {
        return (
          <Grid key={item.id} xs="12" sm="4">
            <ProductCard item={item}/>
          </Grid>
        )
      })
    )
  }
  return (
    <AppWrapper>
      {component}
    </AppWrapper>
  );
}

export default App;
