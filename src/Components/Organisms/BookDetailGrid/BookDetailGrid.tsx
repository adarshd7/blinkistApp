import { Grid } from "@mui/material";
import * as React from "react";
import BookDetail from "../../Molecules/BookDetail/BookDetail";
import ToggleTabs from "../../Molecules/ToggleTabs/ToggleTabs";



export default function BookDetailGrid() {
   
    return (
      <Grid
        container
        direction="column"
        spacing={4}
        sx={{ marginTop: "50px" }}
       
      >
        
        <Grid item>
          <BookDetail></BookDetail>
        </Grid>
        <Grid item >
            <ToggleTabs/>
        </Grid>
        
      </Grid>
    );
  }