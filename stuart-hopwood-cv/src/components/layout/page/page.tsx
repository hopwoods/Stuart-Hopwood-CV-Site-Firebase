import { ReactNode } from 'react'
import Banner from '../banner/banner'
import Content from '../content/content'
import Footer from '../footer/footer'
import FooterNav from '../footer/footerNav'

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
		<Footer>
			<FooterNav />
		</Footer>
	</>
}