import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "90%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pictures = {
  Men:
    "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/295873/1.jpg",
  Women:
    "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/01/581283/1.jpg",
  Kids:
    "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/220093/1.jpg",
};
const ranPictures = [
  "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/295873/1.jpg",
  "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/01/581283/1.jpg",
  "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/220093/1.jpg",
];

function ProductsP({ category }) {
  const classes = useStyles();
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={
                    category === "Dashboard"
                      ? ranPictures[Math.floor(Math.random() * 3)]
                      : category === "Men"
                      ? pictures.Men
                      : category === "Kids"
                      ? pictures.Kids
                      : pictures.Women
                  }
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    Title
                  </Typography>
                </CardContent>
                <CardActions>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <IconButton>
                      <VisibilityOutlinedIcon />
                    </IconButton>
                    <IconButton>
                      <LocalGroceryStoreOutlinedIcon />
                    </IconButton>
                  </div>
                  <Typography variant="h5" component="h2">
                    20.5$
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default ProductsP;
