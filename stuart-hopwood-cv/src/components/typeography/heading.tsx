import { mergeStyleSets } from '@fluentui/merge-styles'
import React from 'react'

type HeaderProps = {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	color: string,
	text: string,
	className?: string
}
export default function Heading({ type, color, text, className }: HeaderProps) {
	const classes = mergeStyleSets({
		container: {
			textAlign: 'center',
			width: '100%',
			display: 'grid',
			gridTemplateColumns: 'auto',
			gridTemplateRows: 'auto',
			placeItems: 'center'
		},
		header: {
			color: `${color} !important`,
			gridColumn: '1 /span 1',
			gridRow: '1 / span 1',
			display: 'grid',
			gridTemplateColumns: 'auto',
			gridTemplateRows: 'auto auto',
			gridGap: '0.6em',
			placeItems: 'center'
		},
		line: {
			borderTop: `0.3em solid ${color}`,
			borderBottom: 0,
			borderLeft: 0,
			borderRight: 0,
			width: '70%',
			gridColumn: '1 /span 1',
			gridRow: '2 / span 1',
			height: 0
		},
		text: {
			gridColumn: '1 /span 1',
			gridRow: '1 / span 1'
		}
	})

	function HeaderElement({ children, className }: { children: React.ReactNode, className: string }) {
		if (type == 'h1') return <h1 className={className}>{children}</h1>
		if (type == 'h2') return <h2 className={className}>{children}</h2>
		if (type == 'h3') return <h3 className={className}>{children}</h3>
		if (type == 'h4') return <h4 className={className}>{children}</h4>
		if (type == 'h5') return <h5 className={className}>{children}</h5>
		if (type == 'h6') return <h6 className={className}>{children}</h6>
		return <h3 className={className}>{children}</h3>
	}

	return <div className={`${className} ${classes.container}`}>
		<HeaderElement className={classes.header}>
			<span>{text}</span>
			<div className={classes.line} />
		</HeaderElement>
	</div>

}