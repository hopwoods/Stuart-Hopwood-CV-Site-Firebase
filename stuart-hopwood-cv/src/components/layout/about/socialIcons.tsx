import { domAnimation, LazyMotion, m, Variants } from "framer-motion";
import {
  FacebookLink,
  GithubLink,
  InstagramLink,
  LinkedInLink
} from "../../controls";
import { classes } from "./socialIcons.css";

export const iconVariants: Variants = {
  offscreen: {
    scale: 0,
    opacity: 0
  },
  onscreen: {
    scale: [0, 1.2, 1],
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    }
  }
};

export function SocialIcons() {
  return <LazyMotion features={domAnimation}>
    <m.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }} className={`socialIcons ${classes.socialIcons}`}>
      <FacebookLink color="primary" size="medium" />
      <GithubLink color="primary" size="medium" />
      <LinkedInLink color="primary" size="medium" />
      <InstagramLink color="primary" size="medium" />
    </m.div>
  </LazyMotion>;
};
