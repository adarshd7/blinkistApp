import React from "react";
import { makeStyles } from "@material-ui/styles";
import Search from "../../Atoms/Search/Search";


const useStyles= makeStyles({
  SearchBox: {
    width: "912px",
    marginTop: "50px",
    marginLeft: "100px",
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
      <Search />
      <input
        type="search"
        placeholder={"Search by title or author"}
        className={classes.Input}
      />
    </div>
  );
};
