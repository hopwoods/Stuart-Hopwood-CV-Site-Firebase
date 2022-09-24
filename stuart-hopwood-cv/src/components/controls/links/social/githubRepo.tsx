import { domAnimation, LazyMotion, m } from "framer-motion";
import { FaGitAlt } from "react-icons/fa";
import { theme } from "../../../../Hooks/useTheme";
import { typography } from "../../../typeography/typography.css";
import { classes } from "./githubRepo.css";

export function GithubRepo() {
  return <LazyMotion features={domAnimation} >
    <m.div initial={{ color: theme.Grey12 }} whileHover={{ color: theme.brandAccentColor }} transition={{ duration: 0.3 }} className={`github ${classes.githubRepoLink} ${typography.copy3} `}>
      <span className={classes.icon}><FaGitAlt /></span>
      <a href="https://github.com/hopwoods/Stuart-Hopwood-CV-Site" target="_blank" rel="noopener noreferrer" className={classes.link}>Site Source Code</a>
    </m.div>
  </LazyMotion>
};
