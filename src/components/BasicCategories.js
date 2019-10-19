import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import "../assets/css/style.css";

// const classes = useStyles
class BasicCategories extends React.Component {
  render() {
    const styles = {
      card: {
        maxWidth: 345
      },
      media: {
        height: 140
      }
    };

    const basicCategoryArr = [{'id': 1, description: "Film, also called movie or motion picture, is a medium used to simulate experiences that communicate ideas, stories, perceptions, etc by the means of recorded or programmed moving images along with other sensory stimulations. The word cinema, short for cinematography,  and to the art form that is the result of it.","category-img-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9IFqURYjaahkuGLyrpZT9q4VahXLWNsGGndqMjD8FgNGO1XKj" , 'category-name':'Movies'}, {'id': 2 ,  description: 'A television show (often simply TV show) is any content produced for broadcast via over-the-air, satellite, cable, or internet and typically viewed on a television set, excluding breaking news, advertisements, or trailers that are typically placed between shows. Television shows are most often scheduled well ahead of time and appear on electronic guides or other TV listings.', "category-img-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT54uE5-1KmdVyASDoGrjyXisXiNW27MPpjkZrSKM7nS5h3_1hh", 'category-name':'TV Shows'} , {'id': 3 , description:"A web series is a series of scripted or non-scripted videos, generally in episodic form, released on the Internet and part of the web television medium, which first emerged in the late 1990s and became more prominent in the early 2000s. A single instance of a web series program can be called an episode or webisode, however the latter term is not often used.", "category-img-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkjD8YSd94vgnyynGfA96d69BqgnCzVDnpy5IZn5MYk3izKdTu", 'category-name':'Web-Series'}];
    const categoryRenderArr = basicCategoryArr.map( category => (
      <Grid key={category.id} item lg={4}>
        <Card  className="card">
          <CardActionArea>
            <CardMedia
              className="media"
              image={category["category-img-src"]}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {category['category-name']}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {category.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
    return (
        <Container maxWidth="lg">
        <Grid container spacing={3}>
        {categoryRenderArr}
        </Grid>
        </Container>
    );
  }
}

export default BasicCategories;
