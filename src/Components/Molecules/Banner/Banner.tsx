import React from 'react';
import {Grid} from "@mui/material";
import { Typography } from '@mui/material';


const Banner = () => {
  return (
    <Grid container rowSpacing="15px" direction="column">
    <Grid item>
    <Typography   width="319px" sx={{ color: "#03314B" }}>
      Explore Books on entrepreneurship
    </Typography>
    </Grid>
    <Grid item>
    <Typography variant="subtitle2" width="461px" sx={{ color: "#6D787E" }}>
      Everything you need to know about thriving on a shoestring budget, making
      your first million, and hiring right from the start.
    </Typography>
    </Grid>
  </Grid>
  )
}

export default Banner;