
import * as React from "react";
import { ReactNode } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Timer from "../../Atoms/Timer/Timer";
import { makeStyles } from "@material-ui/core";

export interface IViewProps {
  children: ReactNode;
}
const useStyles = makeStyles({
  time: {
    display: "flex",
    alignItems: "flex-end",
    columnGap: "6px",
  },
});
export default function View(props: IViewProps) {
  const classes=useStyles();
  return (
    <div className={classes.time}>
      <PersonOutlineIcon></PersonOutlineIcon>
      <Timer>{props.children}</Timer>
    </div>
  );
}
