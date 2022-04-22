import React, { useState } from "react";
import { customStyles } from "../../../Theme";
import { Button, Grid } from "@mui/material";
import {Link, Navigate } from 'react-router-dom';
import Logo from "../../../Components/Atoms/Logo/Logo";
import { Typography } from "@mui/material";
import Icon from "../../Atoms/Icon/Icon";
import Avatar from "../../../Components/Atoms/Avatar/Avatar";
import {ReactComponent as Search} from "../../../assessts/Search.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExploreCard from '../../Organisms/ExploreCard/ExploreCard';
import logo from '../../Atoms/CoverImages/blinkist.png';
import {useNavigate} from 'react-router-dom'





const Header= () =>{
  const [clicked, handleClicked] = useState(false);
  const navigate = useNavigate();
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
          <Link to='/'>
          <img src={logo}/>
          </Link>
        </Grid>
        <Grid item>
          <Icon icon={Search}/>
        </Grid>
        <Grid item>
        <Typography sx={{color:"#03314B"}} className={classes.headerLink} onClick={() => {
          handleClicked(!clicked);
        }}>
        Explore  {clicked ? (
        <KeyboardArrowUpIcon/>
        ) : (
          <KeyboardArrowDownIcon/>
        )}
        </Typography>
        </Grid>
        <Grid item>
          <Typography  >
            <Link to='/' color="#03314B"  className={classes.headerLink}>
            My Library
            </Link>
           
          </Typography>
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
        <ExploreCard handleChange={ () => navigate("explore")}/>
      </Grid>
    </Grid>
  );
}

export default Header;