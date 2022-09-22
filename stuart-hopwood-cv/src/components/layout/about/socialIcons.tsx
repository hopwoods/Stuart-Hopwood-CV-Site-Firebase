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
    scale: 0.2
  },
  onscreen: {
    scale: [2, 1, 1.2, 1],
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8
    }
  }
};

export const SocialIcons: React.FC = () => {
  return <LazyMotion features={domAnimation}>
    <m.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className={`socialIcons ${classes.socialIcons}`}>
      <FacebookLink color="primary" size="medium" />
      <GithubLink color="primary" size="medium" />
      <LinkedInLink color="primary" size="medium" />
      <InstagramLink color="primary" size="medium" />
    </m.div>
  </LazyMotion>;
};
