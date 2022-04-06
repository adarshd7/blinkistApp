import { Card, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "../Banner/Banner";
import { makeStyles } from "@material-ui/styles";
//import person from "../../Atoms/CoverImages/person.png"


const useStyles = makeStyles({
  bannerCard: {
    border: "none",
    boxShadow: "none",
    height: "230px",
    width: "250px",
    backgroundColor: "#F1F6F4",
  },
   bannerBox: {
    backgroundColor: "#F1F6F4",
    marginLeft: "100px",
    marginTop: "32px",
  },
});
const FullBanner = () => {
  const classes = useStyles();
  return (
    <Box width="fit-content" height="264px" className={classes.bannerBox}>
      <Grid container columnSpacing="112px">
        <Grid item sx={{ marginTop: "45px", marginLeft: "40px" }}>
          <Banner />
        </Grid>
        <Grid item>
          <Card className={classes.bannerCard}>
            <CardMedia
              component="img"
              image="">
              
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FullBanner;
