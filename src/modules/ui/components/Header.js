import React from 'react'
import {
  AppBar,
  Toolbar,
  Link,
  FormControlLabel,
  Switch,
  Badge,
  IconButton,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import logo from 'assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  logoImage: {
    width: 35,
    height: 35,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
  textC: {
      textTransform: 'uppercase',
      letterSpacing: theme.spacing(1),
      '&:hover': {
          color: theme.palette.secondary.dark
      }
  }
}))
function Header() {
  const classes = useStyles()
  return (
    <>
      <AppBar>
        <Toolbar>
          <Link
            href="/"
            color="inherit"
            underline="none"
            className={classes.logoLink}
          >
            <img src={logo} alt="Naphat" className={classes.logoImage} />
          </Link>
          <Link href="/products" color="inherit" underline="none" className={classes.textC}>
            Products
          </Link>
          <div className={classes.spacer}></div>
          <FormControlLabel
            control={<Switch color="secondary"></Switch>}
            label="Dark"
          ></FormControlLabel>
          <IconButton color="inherit">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
