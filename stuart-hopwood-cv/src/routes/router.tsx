import { useCallback, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { useAboutTextDatabase } from '../database/aboutTextDatabase'
import { useSkillDatabase } from '../database/skillsDatabase'
import useFirebase from '../Hooks/firebase/useFirebase'
import AdminAboutText from '../pages/admin/admin-about-text'
import AdminSkills from '../pages/admin/admin-skills'
import Admin from '../pages/admin/administration'
import Login from '../pages/login'
import { useAboutTextStore } from '../state/aboutTextStore'
import { useSkillsStore } from '../state/skillsStore'
import ProtectedRoute from './protectedRoute'

export default function Router() {
	try {
		useFirebase()
	} catch (error) {
		console.error(error)
	}


	const { skills, setSkills } = useSkillsStore()
	const { aboutText, setText } = useAboutTextStore()
	const { getAllSkillsFromDb } = useSkillDatabase()
	const { getAboutTextFromDb } = useAboutTextDatabase()

	const populateSkills = useCallback(async () => {
		if (skills.length === 0) {
			const skillsFromDb = await getAllSkillsFromDb()
			if (skillsFromDb)
				setSkills(skillsFromDb)
		}
	}, [getAllSkillsFromDb, setSkills, skills])

	const populateAboutText = useCallback(async () => {
		if (!aboutText) {
			const result = await getAboutTextFromDb()
			if (result)
				setText(result)
		}
	}, [aboutText, getAboutTextFromDb, setText])

	useEffect(() => {
		populateSkills()
		populateAboutText()
	}, [populateAboutText, populateSkills])

	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			//errorElement: <NotFoundPage />
		},
		{
			path: '/home',
			element: <App />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/admin',
			element: <ProtectedRoute redirectPath='/'>
				<Admin />
			</ProtectedRoute>,
		},
		{
			path: '/admin/about-text',
			element: <ProtectedRoute redirectPath='/'>
				<AdminAboutText />
			</ProtectedRoute>,
		},
		{
			path: '/admin/skills',
			element: <ProtectedRoute redirectPath='/'>
				<AdminSkills />
			</ProtectedRoute>,
		},
	])

	return <RouterProvider router={router} />
}