function Navigation() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
        <div className="container-fluid p-3 px-4">
          <div className="w-100 order-0 order-md-0">
            <img src="public/logo.png" alt="logo" width="85" height="55"/>
            <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse mx-auto order-1 dual-collapse2">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active px-3">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/menu">MENU</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/about">ABOUT</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <img src="public/shopping-bag.svg" alt="Shopping cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation