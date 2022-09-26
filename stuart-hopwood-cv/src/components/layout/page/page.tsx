import React, { ReactNode, Suspense } from 'react'
const Banner = React.lazy(() => import('../banner/banner'))
const Content = React.lazy(() => import('../content/content'))
const Footer = React.lazy(() => import('../footer/footer'))
export type PageProps = {
	fullscreen: boolean
	id: string
	bannerContent: ReactNode
	children: ReactNode

}
export default function Page({ id, fullscreen, bannerContent, children }: PageProps) {
	return <Suspense>
		<Banner id={id} fullscreen={fullscreen}>
			{bannerContent}
		</Banner>
		<Content>
			{children}
		</Content>
		<Footer />
	</Suspense>
}