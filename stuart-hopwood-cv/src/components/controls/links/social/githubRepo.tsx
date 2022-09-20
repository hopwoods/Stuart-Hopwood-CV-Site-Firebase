import { FaGitAlt } from "react-icons/fa";
import { typography } from "../../../typeography/typography.css";
import { classes } from "./githubRepo.css";

export function GithubRepo() {
  return (
    <div className={`github ${classes.icon} ${typography.copy3} `}>
      <FaGitAlt />
      <span>
        <a href="https://github.com/hopwoods/Stuart-Hopwood-CV-Site" target="_blank" rel="noopener noreferrer">Site Source Code</a>
      </span>
    </div>
  );
};
