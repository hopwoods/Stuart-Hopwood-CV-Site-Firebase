
import { Button, TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import AdminForm from '../../components/layout/admin/administration-form'
import AdminMenu from '../../components/layout/admin/administration-menu'
import Loading from '../../components/layout/loading/loading'
import Page from '../../components/layout/page/page'
import { useAppStore } from '../../state/appStore'
import { classes } from './admin-about-text.css'

// const Button = React.lazy(() => import('@mui/material/Button'))
// const TextField = React.lazy(() => import('@mui/material/TextField'))
// const AdminMenu = React.lazy(() => import('../../components/layout/admin/administration-menu'))
// const Loading = React.lazy(() => import('../../components/layout/loading/loading'))
// const Page = React.lazy(() => import('../../components/layout/page/page'))
// const AdminForm = React.lazy(() => import('../../components/layout/admin/administration-form'))

function Banner() {
	return <h1 className="inverse">Edit About Text</h1>
}

export default function AdminAboutText() {
	const { aboutText, loading, setAboutText } = useAppStore()


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

		setAboutText({ text: e.target.value, id: aboutText?.id })
	}

	return <>
		<Page id="Edit About Text" fullscreen={false} bannerContent={<Banner />}>
			<AdminMenu>
				<NavLink to="/admin/abouttext">About Text</NavLink>
			</AdminMenu>
			{
				loading ? <Loading />
					: <AdminForm >
						<ToastContainer />
						<h3 className={classes.title}>Edit About Text</h3>
						<TextField className={classes.aboutTextField}
							required
							id="about-Text"
							variant="filled"
							label="About Text"
							multiline
							fullWidth
							rows={20}
							color="primary"
							onChange={handleChange}
							helperText="HTML is supported"
							placeholder="Enter some words about yourself..."
							value={aboutText?.text} />
						<Button className={classes.saveButton} variant="contained" color="primary">Save</Button>
					</AdminForm>
			}
		</Page>
	</>
}