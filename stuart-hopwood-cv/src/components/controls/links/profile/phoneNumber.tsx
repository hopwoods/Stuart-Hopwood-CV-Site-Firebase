import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined"
import { typography } from "../../../typeography/typography.css"
import { classes } from "./profileLinks.css"

export function PhoneNumber() {
  return (
    <div className={`${classes.icon} ${typography.copy3} phoneNumber`}>
      <PhoneAndroidOutlinedIcon />
      <span>
        <a href="tel:+447713047840" target="_blank" rel="noopener noreferrer">+44 07713 047840</a>
      </span>
    </div>
  )
}