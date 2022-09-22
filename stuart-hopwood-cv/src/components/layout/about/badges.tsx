import { domAnimation, LazyMotion, m } from "framer-motion";
import { Badge } from "./badge";
import { classes } from "./badges.css";

export function Badges() {
  return (
    <LazyMotion features={domAnimation}>
      <m.article id="badges" initial="offscreen" whileInView="onscreen" viewport={{ once: true }} className={classes.badges}>
        <Badge>Badge 1</Badge>
        <Badge>Badge 2</Badge>
        <Badge>Badge 3</Badge>
        <Badge>Badge 4</Badge>
      </m.article>
    </LazyMotion>
  );
};
