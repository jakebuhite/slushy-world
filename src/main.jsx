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

// Admin
import Dashboard from 'src/pages/admin/Dashboard'
import Messages from 'src/pages/admin/Messages'
import Orders from 'src/pages/admin/Orders'
import Products from 'src/pages/admin/Products'

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
  },
  {
    path: "/admin",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: "/admin/orders",
    element: <Orders />,
    errorElement: <ErrorPage />
  },
  {
    path: "/admin/messages",
    element: <Messages />,
    errorElement: <ErrorPage />
  },
  {
    path: "/admin/products",
    element: <Products />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
