import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compoonents/Home/Home.jsx';
import About from './compoonents/About/About.jsx';
import Contact from './compoonents/Contact/Contact.jsx';
import Users from './compoonents/Users/Users.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
   children : [
    {
      path : "/about",
      element : <About></About>
    },
    {
      path : "/contact",
      element : <Contact></Contact>
    },
    {
      path : "/users",
      element: <Users></Users>
    }
   ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
