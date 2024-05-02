import PropTypes from 'prop-types'
import './Dashboard.css'

export default function AdminIndex({ pageName, active, children }) {
    AdminIndex.propTypes = {
        pageName: PropTypes.string,
        active: PropTypes.string,
        children: PropTypes.any
    }

    return (
        <>
        <AdminHeader />
        <div className="container-fluid" style={{ backgroundColor: "#ffffff" }} >
            <div className="row">
                <AdminSidebar active={ active } />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">{ pageName }</h1>
                  </div>
                  { children }
                </main>
            </div>
        </div>
        </>
    )
}

function AdminHeader() {
    return (
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{ backgroundColor: "#293241" }}>
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" style={{ backgroundColor: "#293241", boxShadow: "none" }} href="index.html">
                <img src="/logo.png" alt="logo" width="57" height="37"/>
            </a>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">
                        Logout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    )
}

function AdminSidebar({ active }) {
    AdminSidebar.propTypes = {
        active: PropTypes.string
    }

    let dashboard = (active == "dashboard") ? "active" : ""
    let orders = (active == "orders") ? "active" : ""
    let products = (active == "products") ? "active" : ""
    let messages = (active == "messages") ? "active" : ""


    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className={`nav-link ${ dashboard }`} aria-current="page" href="/admin">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${ orders }`} href="/admin/orders">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${ products }`} href="/admin/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${ messages }`} href="/admin/messages">
                  Messages
                </a>
              </li>
            </ul>
          </div>
        </nav>
    )
}