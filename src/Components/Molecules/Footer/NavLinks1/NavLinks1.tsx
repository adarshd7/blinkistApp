import { Grid } from "@mui/material";
import React from "react";
import NavHead from "../../../Molecules/Footer/Nav/NavHead/NavHead";
import NavItems from "../../../Molecules/Footer/Nav/NavItems/NavItems";
import { Typography} from "@mui/material";

const list = [
  "Book lists",
  "What is Nonfiction?",
  "What to read next?",
  "Benefits of reading",
];

const NavLinks1 = () => {
  return (
    <Grid container direction="column" rowSpacing="16px">
      <Grid item>
      <Typography variant="body1" sx={{ color: "#03314B" }}>
        Editorial
      </Typography>
      </Grid>
      {list.map((e) => (
        <Grid item key={e}>
          <NavItems name={e} />
        </Grid>
      ))}
    </Grid>
  );
};
export default NavLinks1;
