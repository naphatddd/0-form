import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import currencyFormat from 'utils/currencyFormat'

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
  },
  productDetails: {
    flex: 1,
  },
  media: {
    width: 150,
  },
}))
function CartProduct({ image, name, price }) {
  const classes = useStyles()
  return (
    <Card className={classes.product}>
      <CardMedia
        image={image}
        tite={name}
        className={classes.media}
      ></CardMedia>
      <CardContent className={classes.productDetails}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>{currencyFormat(price)}</Grid>
          <Grid item>
            <IconButton aria-label="delete-label" size="small">
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CartProduct
