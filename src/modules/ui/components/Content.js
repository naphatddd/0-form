import React from 'react'
import { Container, Snackbar, Button, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// import ProductList from 'modules/product/components/ProductList'
import ProductDetails from 'modules/product/components/ProductDetails'
// import Cart from 'modules/cart/components/Cart'
const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2, 0),
  },
}))
function Content() {
  const classes = useStyles()
  return (
    <main className={classes.title}>
      <Container maxWidth="lg">
        <Toolbar />
        {/* <ProductList /> */}
        <ProductDetails />
        {/* <Cart /> */}
        <Snackbar
          open
          message="hello"
          action={<Button color="inherit">Close</Button>}
        ></Snackbar>
      </Container>
    </main>
  )
}

export default Content
