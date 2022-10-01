import LocationOnIcon from '@mui/icons-material/LocationOn'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { theme } from '../../../../style/themeProvider'
import { typography } from '../../../typeography/typography.css'
import { classes } from './profileLinks.css'

export default function Location({ color }: { color: string }) {
	return <LazyMotion features={domAnimation} >
		<m.div initial={{ color: color }} whileHover={{ color: theme.colors.brandAccentColor }} transition={{ duration: 0.3 }} className={`${classes.icon} ${typography.copy3} location`}>
			<LocationOnIcon />
			<span>Exeter, United Kingdom</span>
		</m.div>
	</LazyMotion>
}
