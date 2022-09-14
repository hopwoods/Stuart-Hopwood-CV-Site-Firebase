/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./location.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export function Location() {
  return (
    <div className="location" css={style}>
      <LocationOnIcon />
      <span>Exeter, United Kingdom</span>
    </div>
  );
};
