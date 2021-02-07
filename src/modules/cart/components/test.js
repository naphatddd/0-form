<form onSubmit={handleSubmit(submit)} autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography>Order Information</Typography>
          <TextField
            inputRef={register}
            variant="outlined"
            name="name"
            label="name"
            placeholder="Enter Your Name"
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
            name="address"
            label="address"
            placeholder="Enter Your Address"
            fullWidth
            helperText={errors.address?.message || ''}
            error={!!errors.address}
          />
        </CardContent>
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
      </Card>
    </form>