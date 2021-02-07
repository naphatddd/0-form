import React from 'react'
import { Button } from '@material-ui/core'
import {
  TextField,
  CardActions,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.string().required(),
      })
    ),
  })
  const submit = (deliveryInfo) => {
    console.log(deliveryInfo)
  }
  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography>Order Informations</Typography>
          <TextField
            inputRef={register}
            variant="outlined"
            label="name"
            placeholder="Enter your name"
            name="name"
            fullWidth
            helperText={errors.name?.message || ''}
            error={!!errors.name}
          />
           <TextField
            inputRef={register}
            type="email"
            variant="outlined"
            name="email"
            label="email"
            placeholder="Enter Your Email"
            fullWidth
            helperText={errors.email?.message || ''}
            error={!!errors.email}
          />
          <TextField
            inputRef={register}
            multiline
            rows={4}
            variant="outlined"
            label="address"
            placeholder="Enter your address"
            name="address"
            fullWidth
            helperText={errors.address?.message || ''}
            error={!!errors.address}
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
