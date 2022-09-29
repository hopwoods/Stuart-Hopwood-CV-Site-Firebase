import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loading from '../components/layout/loading/loading'
import ProtectedRoute from './protectedRoute'

const App = lazy(() => import('../App'))
const Login = lazy(() => import('../pages/login'))
const Admin = lazy(() => import('../pages/admin/administration'))
const AdminSkills = lazy(() => import('../pages/admin/admin-skills'))
const AdminAboutText = lazy(() => import('../pages/admin/admin-about-text'))

/** Router component to provide Application routes via React Router */
export default function Router() {
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