import { lazy, ReactNode, Suspense } from 'react'
import { useTheme } from '../../../Hooks'
import ScrollToTopButton from '../../controls/buttons/scrollToTopButton'
import TriangleDown from '../background/triangleDown'
import Banner from '../banner/banner'
import Loading from '../loading/loading'

const Footer = lazy(() => import('../footer/footer'))
const Content = lazy(() => import('../content/content'))

export type PageProps = {
	fullscreen: boolean
	id: string
	bannerContent: ReactNode
	children: ReactNode
}
export default function Page({ id, fullscreen, bannerContent, children }: PageProps) {
	const theme = useTheme()
	return <>
		<Banner id={id} fullscreen={fullscreen}>
			{bannerContent}
		</Banner>
		<Suspense fallback={<Loading loading text='SHCV' />}>
			<Content>
				{children}
			</Content>
		</Suspense>
		<Suspense fallback={<Loading loading text='SHCV' />}>
			<TriangleDown color={theme.bodyBackground} backgroundColor={theme.bodyBackgroundDark} />
			<ScrollToTopButton color="secondary" />
			<Footer />
		</Suspense>
	</>
}