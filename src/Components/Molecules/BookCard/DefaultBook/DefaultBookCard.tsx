import { Grid } from "@mui/material";
import * as React from "react";
import Author from "../../../Atoms/Author/Author";
import { Typography } from "@mui/material";
import DisplayTime from "../../DisplayTime/DisplayTime";
import View from "../../View/View";
import { ReactNode } from "react";
import Box from "@material-ui/core/Box";
import book from "../../../Atoms/CoverImages/2.png"

export interface IBookCardProps {
  children?: ReactNode;
  image: string;
  title: string;
  author: string;
  time: string;
  reads?: String;
}

export default function BookCard(props: IBookCardProps) {
  
  return (
    <Grid
      
      sx={{
        borderRadius: "8px",
        border: "1px solid #E1ECFC",
        overflow: "hidden",
       
      }}
      container
      direction="row"
    >
      <Grid item>
      <img src={book} alt="Book "></img>
      </Grid>
      
        <Grid
          item
          container
          direction="column"
          rowSpacing={2}
          sx={{ marginLeft: "15px" }}
        >
          <Grid item alignItems="center">
          <Typography variant="subtitle2" sx={{ marginTop: "16px" }}>
          {props.title}
          </Typography>
          </Grid>
          <Grid item>
            <Author>{props.author}</Author>
          </Grid>
          <Grid item container alignItems="center" columnSpacing={4}>
            <Grid item>
              <DisplayTime>{props.time}</DisplayTime>
            </Grid>
            <Grid item><View>{props.reads}</View></Grid>
          </Grid>
        </Grid>
      
      
      
      <Grid item container sx={{ height: "10px" }}>
        <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
        <Grid item xs={8} sx={{ background: "#F1F6F4" }} />
      </Grid>
    </Grid>
  );
}
