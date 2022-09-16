import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import { classes } from "./profileLinks.css";

export function PhoneNumber() {
  return (
    <div className={`${classes.icon} phoneNumber`}>
      <PhoneAndroidOutlinedIcon />
      <span>
        <a href="tel:+447713047840" target="_blank" rel="noopener noreferrer">+44 07713 047840</a>
      </span>
    </div>
  );
};