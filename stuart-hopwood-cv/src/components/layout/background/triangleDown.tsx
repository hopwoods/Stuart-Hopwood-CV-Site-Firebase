import { mergeStyleSets } from '@fluentui/merge-styles'

type Triangle = {
	color: string
	backgroundColor: string
}
export function TriangleDown({ color, backgroundColor }: Triangle) {
	const classes = mergeStyleSets({
		triangle: {
			gridColumn: '1 / span 2',
			width: 0,
			height: 0,
			borderLeft: `49.9vw solid ${backgroundColor}`,
			borderRight: `49.9vw solid ${backgroundColor}`,
			borderTop: `30vh solid ${color}`,
			padding: 0,
			margin: 0,
			marginTop: '3rem'
		}
	})

	return (
		<div className={classes.triangle} />
	)
}