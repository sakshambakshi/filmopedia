import React from 'react'
import Breadcrumb from '../components/Breadcrumb.js'
import SearchBar from '../components/SearchBar.js'
import MoviesList from '../components/MoviesList.js'
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

export default function Movies() {
    return (
        <Container maxWidth="lg">
        <Grid container spacing={12}>
        
            <Breadcrumb />
            <SearchBar />
            <MoviesList />
        
        </Grid>
        </Container>
    )
}
