import { lazy, ReactNode, Suspense } from 'react'
import Banner from '../banner/banner'
import Content from '../content/content'
import Loading from '../loading/loading'

const Footer = lazy(() => import('../footer/footer'))

export type PageProps = {
	fullscreen: boolean
	id: string
	bannerContent: ReactNode
	children: ReactNode
}
export default function Page({ id, fullscreen, bannerContent, children }: PageProps) {
	return <>
		<Banner id={id} fullscreen={fullscreen}>
			{bannerContent}
		</Banner>
		<Content>
			{children}
		</Content>
		<Suspense fallback={<Loading loading />}>
			<Footer />
		</Suspense>
	</>
}