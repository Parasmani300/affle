import logo from './logo.svg';
import './App.css';
import { Button, Container, Grid, Paper, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Calendar from 'react-calendar';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const meetingRoom = [
  {
    value: 'Training Room',
    label: 'Training Room'
  },
  {
    value: 'Conference Room',
    label: 'Conference Room',
  },
  {
    value: 'Client Room',
    label: 'Client Room',
  }
];

function App() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <h2>Meeting Room</h2>
        <Grid container style={{marginTop:20}}>
            <Grid xs={12}>
            <TextField
              id="outlined-select-currency"
              select
              label="Meeting Room"
              // value={currency}
              // onChange={handleChange}
              // helperText="Please select your currency<Grid xs={12} style={{marginTop:10}}
              variant="outlined"
              fullWidth
            >
              {meetingRoom.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            <Grid xs={12} style={{marginTop:10}}>
              <TextField id="outlined-basic" label="Your Name" variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} style={{marginTop:10,marginBottom:10}}>
              <TextField id="outlined-basic" label="Meeting Description" variant="outlined" fullWidth />
            </Grid>
        </Grid>

        <Calendar />
        <Container>
          <Grid md={3}><h1>{" "}</h1></Grid>
          <Grid md={9}>Select your Prefered Slot</Grid>
          <Grid md={3}><h1>{" "}</h1></Grid>
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>9:00 AM</Paper>
            </Grid>
          </Grid>
        </Container>

        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: '10vh' }}>
            <Grid item sm={4}>
              <Button variant="contained" color="primary">Book Appointment</Button>
            </Grid>
        </Grid>
        
        
      </Container>
    </div>
  );
}

export default App;
