/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./email.css";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

export function Email() {
  return (
    <div className="email" css={style}>
      <AlternateEmailOutlinedIcon />
      <span>
        <a href="mailto:stoo.hopwood@gmail.com" target="_blank" rel="noopener noreferrer">stoo.hopwood@gmail.com</a>
      </span>
    </div>
  );
};
