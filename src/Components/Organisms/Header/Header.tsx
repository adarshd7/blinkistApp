import React, { useState } from "react";
import { customStyles } from "../../../Theme";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Logo from "../../../Components/Atoms/Logo/Logo";
import { Typography } from "@mui/material";
import Icon from "../../Atoms/Icon/Icon";
import Avatar from "../../../Components/Atoms/Avatar/Avatar";
import {ReactComponent as Search} from "../../../assessts/Search.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExploreCard from '../../Organisms/ExploreCard/ExploreCard';




interface HeaderProps{
  clicked?:boolean,
  
}

export default function Header(props:HeaderProps) {
  const [clicked, handleClicked] = useState(false);
  const classes=customStyles();
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "350px" }}
        columnSpacing={10}
        alignItems="center"
      
      >
        <Grid item>
        <Logo/>
        </Grid>
        <Grid item>
          <Icon icon={Search}/>
        </Grid>
        <Grid item>
        <Link sx={{color:"#03314B"}} className={classes.headerLink} onClick={() => {
          handleClicked(!clicked);
        }}>
        Explore  {clicked ? (
        <KeyboardArrowUpIcon/>
        ) : (
          <KeyboardArrowDownIcon/>
        )}
        </Link>
        </Grid>
        <Grid item>
          <Link  sx={{color:"#03314B"}} className={classes.headerLink}>
            My Library
          </Link>
        </Grid>
        <Grid item direction="row" sx={{ marginLeft: "300px" }}>
          <Grid item sx={{display:"flex",alignItems:"center"}}>
                <Avatar/><KeyboardArrowDownIcon />
            </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        // container sx={{z-index:"-1"}}
        className={clicked ? classes.visible : classes.hidden} >
        <ExploreCard />
      </Grid>
    </Grid>
  );
}