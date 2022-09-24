import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { AdminAboutText } from '../pages/admin/admin-about-text'
import AdminSkills from '../pages/admin/admin-skills'
import Admin from '../pages/admin/administration'
import Login from '../pages/login'
import NotFoundPage from '../pages/NotFoundPage'
import { ProtectedRoute } from './protectedRoute'

export function Router() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <NotFoundPage />
		},
		{
			path: '#home',
			element: <App />,
		},
		{
			path: '#about',
			element: <App />,
		},
		{
			path: '#experience',
			element: <App />,
		},
		{
			path: '#education',
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