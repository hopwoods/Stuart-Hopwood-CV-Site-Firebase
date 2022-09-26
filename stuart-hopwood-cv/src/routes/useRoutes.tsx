import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProtectedRoute } from './protectedRoute'

const App = React.lazy(() => import('../App'))
const AdminAboutText = React.lazy(() => import('../pages/admin/admin-about-text'))
const AdminSkills = React.lazy(() => import('../pages/admin/admin-skills'))
const Admin = React.lazy(() => import('../pages/admin/administration'))
const Login = React.lazy(() => import('../pages/login'))

export default function Router() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			//errorElement: <NotFoundPage />
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