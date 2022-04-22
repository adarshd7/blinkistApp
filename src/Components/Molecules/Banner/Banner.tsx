import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import person from "../../Atoms/CoverImages/person.png"
import { customStyles } from "../../../Theme/index";


const Banner = () => {
  const classes = customStyles();
  return (
   <Box width="fit-content" height="264px" className={classes.bannerBox}>
      <Grid container columnSpacing="112px">
        <Grid item sx={{ marginTop: "45px", marginLeft: "40px" }}>
        <Grid container rowSpacing="15px" direction="column">
    <Grid item>
    <Typography variant="h4" className={classes.exploretitle} >
      Explore Books on entrepreneurship
    </Typography>
    </Grid>
    <Grid item>
    <Typography variant="subtitle2"  className={classes.explorecontent}  sx={{ color: "#6D787E" }}>
      Everything you need to know about thriving on a <br></br>shoestring budget, making
      your first million, and hiring <br></br>right from the start.
    </Typography>
    </Grid>
  </Grid>
        </Grid>
        <Grid item>
         <img  src={person} alt="" className={classes.bannerCardImage}  />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
