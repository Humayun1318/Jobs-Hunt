import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/Applied-Jobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('CategoryData.json')
      },
      {
        path: 'jobDetails/:jobId',
        element: <JobDetails></JobDetails>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/Blog',
        element: <Blog></Blog>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
