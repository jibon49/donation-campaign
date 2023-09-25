import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import App from './App';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
