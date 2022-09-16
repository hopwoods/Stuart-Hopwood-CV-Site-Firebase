import { Flip } from "react-reveal";
import { classes } from "./badges.css";

export const Badges: React.FC = () => {
  return (
    <article id="badges" className={classes.badge}>
      <Flip left cascade>
        <div>Badge 1</div>

        <div>Badge 2</div>

        <div>Badge 3</div>

        <div>Badge 4</div>
      </Flip>
    </article>
  );
};
