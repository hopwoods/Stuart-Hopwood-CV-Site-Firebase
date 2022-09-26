import React, { useEffect } from 'react'
import { AdminMenu, Page } from '../../components/layout'
import { gridClasses } from './administration.css'

function Banner() {
	return <h1 className="inverse">Admin Area</h1>
};

function Admin() {

	useEffect(() => {
		if (sessionStorage.getItem('authPending') == 'true') {
			sessionStorage.removeItem('authPending')
		}

	}, [])

	return (
		<React.Fragment>
			<Page id="Administration" fullscreen={false} bannerContent={<Banner />}>
				<div className={gridClasses.grid}>
					<AdminMenu />
					<p>This is the Admin Area. To update the CV Sections click on the links to the left.</p>
				</div>
			</Page>
		</React.Fragment>
	)
}

export default Admin
