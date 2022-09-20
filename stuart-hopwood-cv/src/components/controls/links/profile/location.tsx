import LocationOnIcon from "@mui/icons-material/LocationOn"
import { typography } from "../../../typeography/typography.css"
import { classes } from "./profileLinks.css"

export function Location() {
  return (
    <div className={`${classes.icon} ${typography.copy3} location`}>
      <LocationOnIcon />
      <span>Exeter, United Kingdom</span>
    </div>
  )
}
