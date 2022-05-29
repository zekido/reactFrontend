import React from 'react'
import ProductList from '../pages/ProductList';
import Categories from './Categories'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './../pages/ProductDetail';
import CartDetail from "../pages/CartDetail";
import ProductAdd from '../pages/ProductAdd';


export default function Dashboard() {
  return (
    <div>
    
      <Grid columns={2}>

        <GridRow>

          <GridColumn width={3}>
            <Categories />
          </GridColumn>

          <GridColumn width={13}>


            <Routes>
              {/* component yazınca getirmiyor o yüzden element  */}
              <Route path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/product/add" element={<ProductAdd />} />
            </Routes>


          </GridColumn>

        </GridRow>

      </Grid>



    </div >
  )
}
