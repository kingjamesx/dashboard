import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import TicketsPage from './routes/TicketsPage.jsx'
import HomePage from './routes/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "tickets",
        element: <TicketsPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
