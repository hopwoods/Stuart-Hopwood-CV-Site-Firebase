import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/login';
import { ProtectedRoute } from './routes';
import Admin from './pages/admin/administration';
import AdminAboutText from './pages/admin/admin-about-text';
import AdminSkills from './pages/admin/admin-skills';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApd0HU0GxRW_fQEBKyN1YnYfLLljXELDw",
  authDomain: "stuart-hopwood-cv.firebaseapp.com",
  projectId: "stuart-hopwood-cv",
  storageBucket: "stuart-hopwood-cv.appspot.com",
  messagingSenderId: "502264664855",
  appId: "1:502264664855:web:b0d12f12d3c41e4c24dd52",
  measurementId: "G-JFF4C0R4MX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "#home",
    element: <App />,
  },
  {
    path: "#about",
    element: <App />,
  },
  {
    path: "#experience",
    element: <App />,
  },
  {
    path: "#education",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute redirectPath='/'>
      <Admin />
    </ProtectedRoute>,
  },
  {
    path: "/admin/about-text",
    element: <ProtectedRoute redirectPath='/'>
      <AdminAboutText />
    </ProtectedRoute>,
  },
  {
    path: "/admin/skills",
    element: <ProtectedRoute redirectPath='/'>
      <AdminSkills />
    </ProtectedRoute>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
