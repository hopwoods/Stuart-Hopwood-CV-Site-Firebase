import { lazy, ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { theme } from '../../../style/themeProvider'
import ScrollToTopButton from '../../controls/buttons/scrollToTopButton'
import ErrorFallback from '../../error/errorFallback'
import { UserAuthProvider } from '../../security/userAuthProvider'
import TriangleDown from '../background/triangleDown'
import Banner from '../banner/banner'

const Footer = lazy(() => import('../footer/footer'))
const Content = lazy(() => import('../content/content'))

export type PageProps = {
	fullscreen: boolean
	id: string
	bannerContent: ReactNode
	children: ReactNode
}
export default function Page({ id, fullscreen, bannerContent, children }: PageProps) {
	return <UserAuthProvider>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Banner id={id} fullscreen={fullscreen}>
				{bannerContent}
			</Banner>
			<Content>
				{children}
			</Content>
			<TriangleDown color={theme.colors.bodyBackground} backgroundColor={theme.colors.bodyBackgroundDark} />
			<ScrollToTopButton color="secondary" />
			<Footer />
		</ErrorBoundary>
	</UserAuthProvider>
}