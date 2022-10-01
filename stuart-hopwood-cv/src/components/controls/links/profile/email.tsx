import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { theme } from '../../../../style/themeProvider'
import { typography } from '../../../typeography/typography.css'
import { classes } from './profileLinks.css'

export default function Email({ color }: { color: string }) {
	return <LazyMotion features={domAnimation} >
		<m.div initial={{ color: color }} whileHover={{ color: theme.colors.brandAccentColor }} transition={{ duration: 0.3 }} className={`${classes.icon} ${typography.copy3} email`}>
			<AlternateEmailOutlinedIcon />
			<span>
				<a href="mailto:stoo.hopwood@gmail.com" target="_blank" rel="noopener noreferrer">stoo.hopwood@gmail.com</a>
			</span>
		</m.div>
	</LazyMotion>
}
