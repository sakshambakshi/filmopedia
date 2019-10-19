import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
      <TextField
        id="standard-full-width"
        label="Search a Movie"
        style={{ margin: 8 }}
        placeholder=""
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      </Paper>
        </Grid>
        </Grid>
    </div>
  );
};
