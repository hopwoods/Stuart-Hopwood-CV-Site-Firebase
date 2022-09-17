import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { typography } from '../../../typeography/typography.css'
import { classes } from "./profileLinks.css"

export function Email() {
  return (
    <div className={`${classes.icon} ${typography.subCopy} email`}>
      <AlternateEmailOutlinedIcon />
      <span>
        <a href="mailto:stoo.hopwood@gmail.com" target="_blank" rel="noopener noreferrer">stoo.hopwood@gmail.com</a>
      </span>
    </div>
  )
}
