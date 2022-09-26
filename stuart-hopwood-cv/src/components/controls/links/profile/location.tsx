import { domAnimation, LazyMotion, m } from 'framer-motion'
import React, { Suspense } from 'react'
import { theme } from '../../../../Hooks/useTheme'
import { typography } from '../../../typeography/typography.css'
import { classes } from './profileLinks.css'

const LocationOnIcon = React.lazy(() => import('@mui/icons-material/LocationOn'))

export default function Location() {
	return <Suspense>
		<LazyMotion features={domAnimation} >
			<m.div initial={{ color: theme.Grey12 }} whileHover={{ color: theme.brandAccentColor }} transition={{ duration: 0.3 }} className={`${classes.icon} ${typography.copy3} location`}>
				<LocationOnIcon />
				<span>Exeter, United Kingdom</span>
			</m.div>
		</LazyMotion>
	</Suspense>
}
