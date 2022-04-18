import React from "react";

import { customStyles } from "../../../Theme";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Logo from "../../Atoms/CoverImages/blinkist.png";
import { Typography } from "@mui/material";


export default function Footer(){
const classes=customStyles();
  return( 
            <Grid item container sx={{width: "1440px",height: "370px",backgroundColor:"#F1F6F4;"}} 
            >
                <Grid item>
            <Grid item container direction="row" columnSpacing={4}>
                <Grid item>
                <Grid item container direction="column" sx={{marginLeft:"244px",marginTop:"38px"}} rowSpacing={3}>
                <Grid item>
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid item >
                    <Typography variant="h5" className={classes.footertitle} >
                    Big ideas in small packages<br></br>
                    Start learning now
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item>
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}}>
                        Editorial
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} className={classes.footerNavlinks}>
                   Book list
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                  What is Nonfiction?
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                  What to read next?
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                 Benefits of reading
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item >
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}}>
                        Useful links
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Pricing
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Blinkist business
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Gift cards
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                         Blinkist magaine
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Contact & help
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item >
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}}>
                        Company
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        About
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        Careers
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                        partners
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}}>
                         Code of Conduct
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
            <Grid item >
            <Typography className={classes.footertag} sx={{marginLeft:"244px"}} >
                © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
            </Grid>
            </Grid>

  );
}

