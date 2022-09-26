import { ReactNode } from 'react'
import { Banner, Content, Footer } from '../../components/layout'

export type PageProps = {
	fullscreen: boolean
	id: string
	bannerContent: ReactNode
	children: ReactNode

}
export function Page({ id, fullscreen, bannerContent, children }: PageProps) {
	return <>
		<Banner id={id} fullscreen={fullscreen}>
			{bannerContent}
		</Banner>
		<Content>
			{children}
		</Content>
		<Footer />
	</>
}