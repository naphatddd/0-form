import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import querystring from 'query-string'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import ProductItem from './ProductItem'
import CategoryList from './CategoryList'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))
function ProductList() {
  const classes = useStyles()
  const { search } = useLocation()
  const { category } = querystring.parse(search)
  const [products, setProducts] = useState([])
  const [isloading, setIsloading] = useState(false)
  useEffect(() => {
    const loadProduct = async () => {
      setIsloading(true)
      const { data } = await axios.get(`/products${search}`)
      setProducts(data)
      setIsloading(false)
    }
    loadProduct()
  }, [search])
  return (
    <>
      <Typography variant="h3" component="h1" className={classes.title}>
        {category || 'All'} Products
      </Typography>
      <CategoryList />
      {isloading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product._id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
