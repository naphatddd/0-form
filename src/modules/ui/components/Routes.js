import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductRoutes from 'modules/product/components/Routes'
import CartRoutes from 'modules/cart/components/Routes'

function Routes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductRoutes />
      </Route>
      <Route path="/cart">
        <CartRoutes />
      </Route>
      <Route path="/"></Route>
      <Route></Route>
    </Switch>
  )
}

export default Routes
