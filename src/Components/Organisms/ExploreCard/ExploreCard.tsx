import React from "react";
import { Grid, Divider, Box } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ExploreHeader from "../../Molecules/ExploreHeader/ExploreHeader";
import ExploreMenuItem from "../../Molecules/ExploreMenu/ExploreMenuItem";
import Icon from "../../Atoms/Icon/Icon";
import { ReactComponent as Science} from "../../../assessts/Science.svg";
import { ReactComponent as Economics} from "../../../assessts/Economics.svg";
import { ReactComponent as Corporate} from "../../../assessts/Corporate.svg";
import { ReactComponent as Psychology} from "../../../assessts/Psychology.svg";
import { ReactComponent as Nature} from "../../../assessts/Nature&Environment.svg";
import { ReactComponent as Politics} from "../../../assessts/Politics.svg";
import { ReactComponent as Health} from "../../../assessts/Health.svg";
import { ReactComponent as History} from "../../../assessts/History.svg";
import { ReactComponent as Motivation} from "../../../assessts/Motivation.svg";
import { ReactComponent as Productivity} from "../../../assessts/Productivity.svg";
import { ReactComponent as Career} from "../../../assessts/Career&success.svg";
import { ReactComponent as Marketing} from "../../../assessts/Marketing.svg";
import { ReactComponent as PersonalDevelopment} from "../../../assessts/PersonalDevelopment.svg";
import { ReactComponent as Communication} from "../../../assessts/CommunicationSkills.svg";
import { ReactComponent as Money} from "../../../assessts/Money.svg";
import { ReactComponent as Sex} from "../../../assessts/Sex&Relationship.svg";
import { ReactComponent as Education} from "../../../assessts/Education.svg";




const itemList = [
  { name: "Entrepreneurship", icon: <RocketLaunchOutlinedIcon /> },
  { name: "Science", icon: <Icon icon={Science}/> },
  { name: "Economics", icon: <Icon icon={Economics}/> },
  { name: "Corporate Culture", icon: <Icon icon={Corporate}/> },
  { name: "Psychology", icon: <Icon icon={Psychology}/> },
  { name: "Nature & Environment", icon:  <Icon icon={Nature}/> },
  { name: "Politics", icon: <Icon icon={Politics} /> },
  { name: "Health & Nutrition", icon: <Icon icon={Health} /> },
  { name: "History", icon: <Icon icon={History} /> },
  { name: "Motivation & Inspiration", icon: <Icon icon={Motivation} /> },
  { name: "Productivity", icon: <Icon icon={Productivity} /> },
  { name: "Career & Success", icon: <Icon icon={Career} /> },
  { name: "Marketing & Sales", icon: <Icon icon={Marketing} /> },
  { name: "Personal Development", icon: <Icon icon={PersonalDevelopment} /> },
  { name: "Communication Skills", icon: <Icon icon={Communication} /> },
  { name: "Money & Investments", icon: <Icon icon={Money} /> },
  { name: "Sex & Relationship", icon: <Icon icon={Sex} /> },
  { name: "Education", icon: <Icon icon={Education} /> },
];

interface PageChange {
  handleChange: () => void;
}

const ExploreCard = (props: PageChange) => {
  const items = itemList.map((e) => (
    <ExploreMenuItem
      key={e.name}
      handleChange={props.handleChange}
      starticon={e.icon}
    >
      {e.name}
    </ExploreMenuItem>
  ));

  return (
    <Box sx={{width:'1500px'}}>
      <ExploreHeader />
      <Divider sx={{ width: "850px", marginLeft: "454px" }} />
      <Grid
        container
        sx={{
          paddingTop: "30px",
          paddingBottom: "24px",
          width: "1000px",
          marginLeft: "450px",
          color: "#F1F6F4"
        }}
        
      >
        {items.map((e, index) => (
          <Grid key={index} item xs={4}>
            {e}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExploreCard;