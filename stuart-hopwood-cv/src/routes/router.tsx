import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loading from '../components/layout/loading/loading'
import NotFoundPage from '../pages/NotFoundPage'
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
			element: <Suspense fallback={<Loading loading text='SHCV' />}>
				<App />
			</Suspense>,
			errorElement: <NotFoundPage />
		},
		{
			path: '/home',
			element: <Suspense fallback={<Loading loading text='SHCV' />}>
				<App />
			</Suspense>,
		},
		{
			path: '/login',
			element: <Suspense fallback={<Loading loading text='SHCV' />}>
				<Login />
			</Suspense>,
		},
		{
			path: '/admin',
			element: <ProtectedRoute redirectPath='/'>
				<Suspense fallback={<Loading loading text='SHCV' />}>
					<Admin />
				</Suspense>
			</ProtectedRoute>,
		},
		{
			path: '/admin/about-text',
			element: <ProtectedRoute redirectPath='/'>
				<Suspense fallback={<Loading loading text='SHCV' />}>
					<AdminAboutText />
				</Suspense>
			</ProtectedRoute>,
		},
		{
			path: '/admin/skills',
			element: <ProtectedRoute redirectPath='/'>
				<Suspense fallback={<Loading loading text='SHCV' />}>
					<AdminSkills />
				</Suspense>
			</ProtectedRoute>
		},
	])

	return <RouterProvider router={router} />
}