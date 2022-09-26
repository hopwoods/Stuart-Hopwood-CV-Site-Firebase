import React, { Suspense, useState } from 'react'
import { classes } from './loading.css'

const Backdrop = React.lazy(() => import('@mui/material/Backdrop'))
const CircularProgress = React.lazy(() => import('@mui/material/CircularProgress'))

export default function Loading({ loading }: { loading?: boolean }) {
	const [open] = useState(loading ? true : false)

	return <Suspense>
		<Backdrop className={classes.loading} open={open}>
			<CircularProgress color="primary" />
		</Backdrop>
	</Suspense>
}
