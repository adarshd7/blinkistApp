import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface Templateprops{
    header:ReactNode,
    content:ReactNode,
    footer:ReactNode,
}

const Template=(props:Templateprops) => {
return(
    //original
    // <Grid item container direction="column" sx={{textAlign:'left'}}>
    //     <Grid item >
    //         {props.header}
    //     </Grid>
    //     <Grid item  >
    //         {props.content}
    //     </Grid>
    //     <Grid item sx={{backgroundColor:"#F1F6F4"}} >
    //         {props.footer}
    //     </Grid>
    // </Grid>


    //experiment
    <Grid item container direction="column" sx={{textAlign:'left'}}>
        <Grid item >
            {props.header}
        </Grid>
        <Grid item  sx={{display:'flex', justifyContent:'center'}}>
            {props.content}
        </Grid>
        <Grid item sx={{backgroundColor:"#F1F6F4", display:'flex', justifyContent:'center', mt:'60px'}} >
            {props.footer}
        </Grid>
    </Grid>
);}
            

export default Template;