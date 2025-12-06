
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import LogIn from '../Pages/LogIn/LogIn'
import SignUp from '../Pages/SignUp/SignUp'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    
  },
   { path: '/login', element: <LogIn /> },
  { path: '/signup', element: <SignUp /> },
 
])
