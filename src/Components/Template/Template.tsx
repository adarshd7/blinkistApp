import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface Templateprops{
    header:ReactNode,
    content:ReactNode,
    footer:ReactNode,
}

const Template=(props:Templateprops) => {
return(
    <Grid item container direction="column" >
        <Grid item >
            {props.header}
        </Grid>
        <Grid item sx={{marginLeft:"400px"}} >
            {props.content}
        </Grid>
        <Grid item sx={{backgroundColor:"#F1F6F4"}} >
            {props.footer}
        </Grid>
    </Grid>
);}
            

export default Template;