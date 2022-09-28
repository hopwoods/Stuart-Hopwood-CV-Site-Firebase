import { Backdrop, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { classes } from './loading.css'

// const Backdrop = React.lazy(() => import('@mui/material/Backdrop'))
// const CircularProgress = React.lazy(() => import('@mui/material/CircularProgress'))

export default function Loading({ loading }: { loading?: boolean }) {
	const [open] = useState(loading ? true : false)

	return <>
		<Backdrop className={classes.loading} open={open}>
			<CircularProgress color="primary" />
		</Backdrop>
	</>
}
