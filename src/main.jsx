import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

// Components
import ErrorPage from 'src/components/error/Error'
import Home from 'src/pages/home/Home'
import Menu from 'src/pages/menu/Menu'
import About from 'src/pages/about/About'
import Contact from 'src/pages/contact/Contact'
import Cart from 'src/pages/cart/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
