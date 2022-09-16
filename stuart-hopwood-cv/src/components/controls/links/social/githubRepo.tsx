import { FaGitAlt } from "react-icons/fa";
import { classes } from "./githubRepo.css";

export function GithubRepo() {
  return (
    <div className={`github ${classes.icon}`}>
      <FaGitAlt />
      <span>
        <a href="https://github.com/hopwoods/Stuart-Hopwood-CV-Site" target="_blank" rel="noopener noreferrer">Site Source Code</a>
      </span>
    </div>
  );
};
