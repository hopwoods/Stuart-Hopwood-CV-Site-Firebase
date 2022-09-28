import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { theme } from '../../../../Hooks/useTheme'
import { typography } from '../../../typeography/typography.css'
import { classes } from './profileLinks.css'

// const AlternateEmailOutlinedIcon = React.lazy(() => import('@mui/icons-material/AlternateEmailOutlined'))

export default function Email() {
	return <LazyMotion features={domAnimation} >
		<m.div initial={{ color: theme.Grey12 }} whileHover={{ color: theme.brandAccentColor }} transition={{ duration: 0.3 }} className={`${classes.icon} ${typography.copy3} email`}>
			<AlternateEmailOutlinedIcon />
			<span>
				<a href="mailto:stoo.hopwood@gmail.com" target="_blank" rel="noopener noreferrer">stoo.hopwood@gmail.com</a>
			</span>
		</m.div>
	</LazyMotion>
}
