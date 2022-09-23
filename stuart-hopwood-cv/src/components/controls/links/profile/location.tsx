import LocationOnIcon from "@mui/icons-material/LocationOn"
import { domAnimation, LazyMotion, m } from "framer-motion"
import { theme } from "../../../../Hooks/useTheme"
import { typography } from "../../../typeography/typography.css"
import { classes } from "./profileLinks.css"

export function Location() {
  return <LazyMotion features={domAnimation} >
    <m.div initial={{ color: theme.Grey12 }} whileHover={{ color: theme.hotpink }} transition={{ duration: 0.3 }} className={`${classes.icon} ${typography.copy3} location`}>
      <LocationOnIcon />
      <span>Exeter, United Kingdom</span>
    </m.div>
  </LazyMotion>
}
