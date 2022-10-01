import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { theme } from '../../../../style/themeProvider'
import { typography } from '../../../typeography/typography.css'
import { classes } from './profileLinks.css'

export default function PhoneNumber({ color }: { color: string }) {

	return <LazyMotion features={domAnimation} >
		<m.div initial={{ color: color }} whileHover={{ color: theme.colors.brandAccentColor }} transition={{ duration: 0.3 }} className={`${classes.icon} ${typography.copy3} phoneNumber`}>
			<PhoneAndroidOutlinedIcon />
			<span>
				<a href="tel:+447713047840" target="_blank" rel="noopener noreferrer">+44 07713 047840</a>
			</span>
		</m.div>
	</LazyMotion>
}