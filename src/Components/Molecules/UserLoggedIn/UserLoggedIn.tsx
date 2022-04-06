import { makeStyles } from "@material-ui/styles";
import { KeyboardArrowDown } from "@mui/icons-material";
import Avatar from "../../Atoms/Avatar/Avatar";

const useStyles = makeStyles({
  userlogin: {
    display: "flex",
    alignItems: "center",
  },
});
export interface IUserLoggedInProps {}

export default function UserLoggedIn(props: IUserLoggedInProps) {
  const classes=useStyles();
  return (
    <div className={classes.userlogin}>
      <Avatar/>
      <KeyboardArrowDown />
    </div>
  );
}
