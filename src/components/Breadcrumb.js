import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default function Breadcrumb() {
  const classes = useStyles();

  return (
    
      <Grid item xs={12}>
      <Paper elevation={0} className={classes.paper}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Home
            </Link>
            {/* <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              Home
            </Link> */}
            <Typography color="textPrimary">Movies</Typography>
          </Breadcrumbs>
        </Paper>
     
      <div className={classes.root}>
        
        <br />
      </div>
    </Grid>
  );
}
