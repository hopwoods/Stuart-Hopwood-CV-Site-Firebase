import { domAnimation, LazyMotion, m } from "framer-motion";
import { Badge } from "./badge";
import { classes } from "./badges.css";

export function Badges() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section id="badges" initial="offscreen" whileInView="onscreen" viewport={{ once: true }} transition={{ staggerChildren: 0.35 }} layout className={classes.badges}>

        <Badge>Badge 1</Badge>
        <Badge>Badge 2</Badge>
        <Badge>Badge 3</Badge>
        <Badge>Badge 4</Badge>

      </m.section>
    </LazyMotion>
  );
};
