import React from "react";
import Icon from "../../Atoms/Icon/Icon";
import bookimg from "../../Atoms/CoverImages/2.png";
import { customStyles } from "../../../Theme/index";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ReactComponent as Timer} from "../../../assessts/Timer.svg";



export default function BookDetail() {
    const classes = customStyles();

  return (
    <Grid container >
      <Grid item md={8}>
        <Grid container direction="column" rowSpacing={3}>
            <Grid item>
            <Typography
                variant="body2"
                component="div"
                children="Get the key ideas from"
                className={classes.bookInfo} />
            </Grid>
          <Grid item>
            <Typography variant="heading"  className={classes.bookInfo}>
              Beyond Entrepreneurship 2.0
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}  className={classes.bookInfo}>
              Turning Your Business into an Enduring Great Company
            </Typography>
          </Grid>
          <Grid item>
          <Typography
                variant="body2"
                component="div"
                children="By Jim Collins and Bill Lasier"
                className={classes.iconText}
              />
          </Grid>
          <Grid item>
          <Typography sx={{display:"flex"}}>
            <Icon icon={Timer}/> 15-minute read
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: "40px" }} columnSpacing={4}>
          <Grid item>
          
          <Button variant="outlined" className={`${classes.buttonstyle} ${classes.readNowButton}`}>
            Read now
         </Button>     
    
          </Grid>
          <Grid item>
          <Button variant="text" className={`${classes.buttonstyle} ${classes.finishedReading}`}>
                   Finished Reading
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              endIcon={<ArrowForward></ArrowForward>}
              sx={{ textTransform: "none", color: "#6D787E" }}
              className={`${classes.buttonstyle} ${classes.sendToKindle}`}
            >
              Send to Kindle
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}>
        <img src={bookimg} alt="Entrepreneur Cover" />
      </Grid>
    </Grid>
  );
}


