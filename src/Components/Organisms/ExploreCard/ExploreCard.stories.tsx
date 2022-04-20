import ExploreCard from "./ExploreCard";

export default {
  title: "Organisms/ExploreCard",
  component: ExploreCard,
} 

export const exploreCard = () => (
  <ExploreCard handleChange={() => alert()}></ExploreCard>
);