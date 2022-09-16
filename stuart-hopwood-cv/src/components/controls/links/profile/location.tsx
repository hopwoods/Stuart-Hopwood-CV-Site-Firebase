import LocationOnIcon from "@mui/icons-material/LocationOn";
import { classes } from "./profileLinks.css";

export function Location() {
  return (
    <div className={`${classes.icon} location`}>
      <LocationOnIcon />
      <span>Exeter, United Kingdom</span>
    </div>
  );
};
