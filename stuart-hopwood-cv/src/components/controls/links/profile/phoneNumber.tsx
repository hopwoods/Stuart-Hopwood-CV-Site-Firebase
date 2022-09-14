/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./phoneNumber.css";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

export function PhoneNumber() {
  return (
    <div className="phoneNumber" css={style}>
      <PhoneAndroidOutlinedIcon />
      <span>
        <a href="tel:+447713047840" target="_blank" rel="noopener noreferrer">+44 07713 047840</a>
      </span>
    </div>
  );
};