import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as Search} from '../../../assessts/Search.svg';
import Icon from "../../Atoms/Icon/Icon";

const useStyles= makeStyles({
  SearchBox: {
    width: "912px",
    marginTop: "50px",
    marginBottom: "60px",
    display: "flex",
    alignItems: "center",
    border: "none",
    borderBottom: "2px solid #6D787E",
    columnGap: "10px",
    paddingBottom: "10px",
  },
  Input: {
    paddingLeft: "10px",
    border: "none",
    width: "100%",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    color: "#6D787E",
  },
});
export const SearchBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.SearchBox}>
      <Icon icon={Search}/>
      <input
        type="search"
        placeholder={"Search by title or author"}
        className={classes.Input}
      />
    </div>
  );
};
