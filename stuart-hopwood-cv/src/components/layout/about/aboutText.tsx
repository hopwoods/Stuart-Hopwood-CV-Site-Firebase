import parse from 'html-react-parser'
import React from 'react'
import { Suspense, useEffect } from 'react'
import { useAboutTextStore } from '../../../state'
import { typography } from '../../typeography/typography.css'
import { classes } from './aboutText.css'

const Loading = React.lazy(() => import('../loading/loading'))

export default function AboutText() {

	const { text, loading, getAboutText } = useAboutTextStore()

	useEffect(() => {
		getAboutText()
	}, [getAboutText])

	return <Suspense>
		{
			loading
				? <Loading />
				: <div className={`${classes.aboutText} ${typography.copy1}`}>{parse(text)}</div>
		}
	</Suspense>
}
