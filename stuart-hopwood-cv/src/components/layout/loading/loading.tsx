import { Backdrop, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { theme } from '../../../style/themeProvider'
import Heading from '../../typeography/heading'
import { classes } from './loading.css'

export default function Loading({ loading, text }: { loading?: boolean, text?: string }) {
	const [open] = useState(loading ? true : false)

	return <>
		<Backdrop className={classes.loading} open={open}>
			<div className={classes.loadingText}>
				{text ? <Heading text={text} type="h3" color={theme.colors.text} /> : <></>}
				<CircularProgress color="primary" />
			</div>
		</Backdrop>
	</>
}
