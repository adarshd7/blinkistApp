
import * as React from "react";
import { ReactNode } from "react";
import Timer from "../../Atoms/Timer/Timer";
import TimerIcon from "../../Atoms/TimerIcon/TimerIcon";
import { makeStyles } from "@material-ui/styles";

export interface IDisplayTimeProps {
  children: ReactNode;
}
const useStyles = makeStyles({
    time: {
        display: "flex",
        alignItems: "flex-end",
        columnGap: "6px",
      }
});

export default function DisplayTime(props: IDisplayTimeProps) {
  const classes = useStyles();
  return (
    <div className={classes.time}>
      <TimerIcon />
      <Timer>{props.children}</Timer>
    </div>
  );
}