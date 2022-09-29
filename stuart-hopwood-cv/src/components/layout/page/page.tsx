import { lazy, ReactNode, Suspense } from 'react'
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
			<Footer />
		</Suspense>
	</>
}