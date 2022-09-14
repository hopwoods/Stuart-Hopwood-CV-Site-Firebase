/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { FaGitAlt } from "react-icons/fa";
import { style } from "./githubRepo.css";

export function GithubRepo() {
  return (
    <div className="github" css={style}>
      <FaGitAlt />
      <span>
        <a href="https://github.com/hopwoods/Stuart-Hopwood-CV-Site" target="_blank" rel="noopener noreferrer">Site Source Code</a>
      </span>
    </div>
  );
};
