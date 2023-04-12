import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Main from './Component/Layout/Main';
import Statistics from './Component/Statistics/Statistics';
import AppliedJobs from './Component/ApliedJobs/ApliedJobs';
import Blog from './Component/Blog/Blog';
import JobDetails from './Component/JobDetails/JobDetails';

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
      {
        path: '*',
        element: <div className='text-center mt-5 text-bg-danger p-5 '
          style={{ height: '300px', alignItems: 'center' }}>
          <h1 className='p-5 '>404 Not Found</h1>
        </div>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
