
import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AdminMenu, Loading, Page } from '../../components/layout'
import AdminForm from '../../components/layout/admin/administration-form'
import { useAboutTextStore } from '../../state'
import { classes } from './admin-about-text.css'

const Banner: React.FC = () => {
	return (
		<h1 className="inverse">Edit About Text</h1>
	)
}

export function AdminAboutText() {
	const { id, text, loading, setText, getAboutText, updateAboutText } = useAboutTextStore()

	useEffect(() => { getAboutText() }, [getAboutText])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(id, e.target.value)
	}

	return (
		<React.Fragment>
			<Page id="Edit About Text" fullscreen={false} BannerContent={Banner}>
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
								value={text} />
							<Button className={classes.saveButton} variant="contained" color="primary" onClick={() => { updateAboutText() }}>Save</Button>
						</AdminForm>
				}
			</Page>
		</React.Fragment>
	)
}
export default AdminAboutText