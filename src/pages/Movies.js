import React from 'react'
import Breadcrumb from '../components/Breadcrumb.js'
import SearchBar from '../components/SearchBar.js'
import MoviesList from '../components/MoviesList.js'
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    mtcustom:{
        marginTop: 15
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },

  }));
  
export default function Movies() {
    const classes = useStyles();
    return (        
        <Container maxWidth="lg">
        <Grid container spacing={10}>
        
            <Breadcrumb />
            <SearchBar />
            <Grid className={classes.mtcustom} container spacing={3}>
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            </Grid>
        
        </Grid>
        </Container>
    )
}
