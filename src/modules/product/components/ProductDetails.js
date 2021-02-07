import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Paper, Grid, Typography, ButtonGroup, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
  },
}))
function ProductDetails() {
  const { id } = useParams()
  const history = useHistory()
  const [product, setProduct] = useState([])
  const theme = useTheme()
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))
  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await axios.get(`/products/${id}`)
      setProduct(data)
    }
    loadProduct()
  }, [id])
  const byeNow = () => history.push('/cart')
  const classes = useStyles()
  return (
    <Paper className={classes.title}>
      <Grid
        container
        spacing={2}
        className={isMediumUp ? 'flex-start' : 'center'}
      >
        <Grid item>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.content}
          >
            <Grid item>
              <Typography variant="h3" component="h2">
                {product.name}
              </Typography>
              <p>{product.desc}</p>
            </Grid>
            <Grid item>
              <ButtonGroup variant="contained" color="primary" size="small">
                <Button onClick={byeNow}>Bye Now</Button>
                <Button>Add To Cart</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetails
