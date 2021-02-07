import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  submitBtn: {
    flex: 1,
  },
}))
function Delivery() {
  const classes = useStyles()
  return (
    <form autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography>Order Informations</Typography>
          <TextField
            variant="outlined"
            label="name"
            placeholder="Enter your name"
            name="name"
            fullWidth
          />
          <TextField
            type="email"
            variant="outlined"
            label="email"
            placeholder="Enter your Email"
            name="email"
            fullWidth
          />
          <TextField
            multiline
            rows={4}
            variant="outlined"
            label="address"
            placeholder="Enter your address"
            name="email"
            fullWidth
          />
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitBtn}
            >
              Place Order
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </form>
  )
}

export default Delivery
