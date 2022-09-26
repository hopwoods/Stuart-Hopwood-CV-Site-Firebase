import React, { Suspense, useEffect } from 'react'
import { gridClasses } from './administration.css'

const AdminMenu = React.lazy(() => import('../../components/layout/admin/administration-menu'))
const Page = React.lazy(() => import('../../components/layout/page/page'))

function Banner() {
	return <h1 className="inverse">Admin Area</h1>
};

export default function Admin() {

	useEffect(() => {
		if (sessionStorage.getItem('authPending') == 'true') {
			sessionStorage.removeItem('authPending')
		}

	}, [])

	return <Suspense>
		<Page id="Administration" fullscreen={false} bannerContent={<Banner />}>
			<div className={gridClasses.grid}>
				<AdminMenu />
				<p>This is the Admin Area. To update the CV Sections click on the links to the left.</p>
			</div>
		</Page>
	</Suspense>
}