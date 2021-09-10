import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SignUp() {
  const classes = useStyles();
  const [city, setCity] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
         Enter Your Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="basic"
                name="basic"
                variant="outlined"
                required
                fullWidth
                id="basic"
                label="enter your basic"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="HRA"
                label="enter your HRA"
                name="HRA"
                autoComplete="HRA"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="LTA"
                label="enter your LTA"
                name="LTA"
                autoComplete="LTA"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="FA"
                label="enter your FA"
                
                id="FA"
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Investment"
                label="enter your Investment"
                id="Investment"
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="rent"
                label="enter rent you paid"
                
                id="rent"
               
              />
            
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth  className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">city</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={city}
          onChange={handleChange}
          label="Select City"
        >
          
          <MenuItem value={10}>Metro</MenuItem>
          <MenuItem value={20}>Non Metro</MenuItem>
         
        </Select>
      </FormControl>
            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Med"
                label="enter medical policy premium"
                
                id="med"
               
              />
            
            </Grid>
          </Grid>
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClickOpen}
          >
           Submit
          </Button>
          <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Your entered details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Your Basic is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your HRA is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your LTA is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your FA is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your Investment is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your paid rent is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your city is ----
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           Your medical premium is ----
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button  color="primary" >
           submit
          </Button>
        
        </DialogActions>
      </Dialog>
        </form>
      </div>
     
    </Container>
  );
}