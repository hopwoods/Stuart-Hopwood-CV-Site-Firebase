import { lazy, Suspense, useCallback, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loading from '../components/layout/loading/loading'
import { useAboutTextDatabase } from '../database/aboutTextDatabase'
import { useSkillDatabase } from '../database/skillsDatabase'
import useFirebase from '../Hooks/firebase/useFirebase'
import { useAboutTextStore } from '../state/aboutTextStore'
import { useSkillsStore } from '../state/skillsStore'
import ProtectedRoute from './protectedRoute'

const App = lazy(() => import('../App'))
const Login = lazy(() => import('../pages/login'))
const Admin = lazy(() => import('../pages/admin/administration'))
const AdminSkills = lazy(() => import('../pages/admin/admin-skills'))
const AdminAboutText = lazy(() => import('../pages/admin/admin-about-text'))

export default function Router() {

	//Initialise Firebase
	try {
		useFirebase()
	} catch (error) {
		console.error(error)
	}

	//Populate Stores
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
			element: <Suspense fallback={<Loading loading />}>
				<App />
			</Suspense>,
			//errorElement: <NotFoundPage />
		},
		{
			path: '/home',
			element: <Suspense fallback={<Loading loading />}>
				<App />
			</Suspense>,
		},
		{
			path: '/login',
			element: <Suspense fallback={<Loading loading />}>
				<Login />
			</Suspense>,
		},
		{
			path: '/admin',
			element: <ProtectedRoute redirectPath='/'>
				<Suspense fallback={<Loading loading />}>
					<Admin />
				</Suspense>
			</ProtectedRoute>,
		},
		{
			path: '/admin/about-text',
			element: <ProtectedRoute redirectPath='/'>
				<Suspense fallback={<Loading loading />}>
					<AdminAboutText />
				</Suspense>
			</ProtectedRoute>,
		},
		{
			path: '/admin/skills',
			element: <ProtectedRoute redirectPath='/'>
				<Suspense fallback={<Loading loading />}>
					<AdminSkills />
				</Suspense>
			</ProtectedRoute>
		},
	])

	return <RouterProvider router={router} />
}