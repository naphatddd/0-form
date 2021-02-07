import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Order from './Order'
import Delivery from './Delivery'
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))
function Cart() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h3" component="h1" className={classes.title}>
        Order Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={8}>
          <Order />
        </Grid>
        <Grid item sm={12} lg={4}>
          <Delivery />
        </Grid>
      </Grid>
    </>
  )
}

export default Cart
