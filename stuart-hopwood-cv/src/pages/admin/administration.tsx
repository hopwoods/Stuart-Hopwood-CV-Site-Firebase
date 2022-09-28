import { useEffect, useMemo } from 'react'
import AdminMenu from '../../components/layout/admin/administration-menu'
import Page from '../../components/layout/page/page'
import { gridClasses } from './administration.css'

// const AdminMenu = React.lazy(() => import('../../components/layout/admin/administration-menu'))
// const Page = React.lazy(() => import('../../components/layout/page/page'))

function Banner() {
	return <h1 className="inverse">Admin Area</h1>
};

export default function Admin() {


	const authPending = useMemo(() => sessionStorage.getItem('authPending'), [])
	useEffect(() => {
		if (authPending && authPending === 'true') {
			sessionStorage.removeItem('authPending')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <>
		<Page id="Administration" fullscreen={false} bannerContent={<Banner />}>
			<div className={gridClasses.grid}>
				<AdminMenu />
				<p>This is the Admin Area. To update the CV Sections click on the links to the left.</p>
			</div>
		</Page>
	</>
}