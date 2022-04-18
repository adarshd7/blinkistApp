
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ExploreMenuItem from "./ExploreMenuItem";

export default {
  title: "molecules/ExploreMenuItem",
  component: ExploreMenuItem,
} 
export const exploreMenuItem = () => (
  <ExploreMenuItem
    starticon={<RocketLaunchOutlinedIcon />}
    handleChange={() => alert("")}
  >
    Entrepreneurship
  </ExploreMenuItem>
);
