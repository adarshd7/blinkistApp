import { Link } from "@mui/material";import * as React from "react";
import { ReactNode } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

export interface IExploreMenuItemProps {
   starticon: ReactNode;
  children: ReactNode;
  handleChange?: () => void;
}
const useStyles = makeStyles({

  exploreItem: {
    textDecoration: "none",
    color: "#6D787E",
    textTransform: "none",
    "&:hover": {
      color: "#0365F2",
      },
    }

});


export default function ExploreMenuItem(props: IExploreMenuItemProps) {
  const classes = useStyles();
  return (
    <Link underline="none">
      <Button
        onClick={() => {
          
        }}
        variant="text"
        startIcon={props.starticon}
        className={classes.exploreItem}
      >
        {props.children}
      </Button>
    </Link>
  );
}
