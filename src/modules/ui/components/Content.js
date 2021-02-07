import React from 'react'
import { Container, Snackbar, Button, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Routes from './Routes'

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
        <Routes />
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
