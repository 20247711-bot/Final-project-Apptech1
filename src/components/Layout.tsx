import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="mb-4">Admin Panel</h4>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">Dashboard</Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/warehouses" className="nav-link text-white">Warehouses</Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/inventory" className="nav-link text-white">Inventory</Link>
          </li>

          <li className="nav-item">
            <Link to="/admins" className="nav-link text-white">Admins</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;