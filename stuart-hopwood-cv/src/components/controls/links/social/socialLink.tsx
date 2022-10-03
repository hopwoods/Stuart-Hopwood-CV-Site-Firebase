import { mergeStyleSets } from '@fluentui/merge-styles'

type SocialLinkProps = {
	url: string
	logo: React.ReactNode
	target?: string,
	colors: SocialLinkColors
}

export type SocialLinkColors = {
	container: string,
	containerHover: string,
	logo: string
	logoHover: string
}

export function SocialLink({ url, logo, target, colors }: SocialLinkProps) {

	const classes = mergeStyleSets({
		root: {
			display: 'grid',
			gridTemplateRows: 'auto',
			gridTemplateColumns: 'auto',
			padding: '0.2em',
			fontSize: '4em',
		},
		logoContainer: {
			boxModel: 'border-box',
			backgroundColor: colors.container,
			borderRadius: '50%',
			border: `0.5em solid ${colors.container}`,
			width: '1em',
			height: '1em',
			position: 'relative',

			':hover': {
				borderColor: colors.containerHover,
				backgroundColor: colors.containerHover,
				transition: '1s',

				'svg': {
					color: colors.logoHover,
					transition: '1s',
				}
			},
			'svg': {
				fontSize: '0.8em',
				color: colors.logo,
				position: 'absolute',
				left: '-0.5em',
				top: '-0.5em'
			}
		},
		logo: {
			width: '1',
			height: '1',
			translate: '-24.5% -24.5%'
		}
	})

	return <div id="social-link-root" className={classes.root}>
		<a className={classes.logoContainer} href={url} target={target ? target : '_blank'} rel="noreferrer">
			{logo}
		</a>
	</div>
}