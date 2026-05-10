import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="d-flex" >
      
      <div
        className="bg-dark text-white p-4"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h3 className="fw-bold mb-4">
          IMS
        </h3>

        <div className="d-flex flex-column gap-2">

          <NavLink
            to="/"
            end
            className="text-decoration-none text-light p-2 rounded sidebar-link"
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>

          <NavLink
            to="/warehouses"
            className="text-decoration-none text-light p-2 rounded sidebar-link"
          >
            <i className="bi bi-building me-2"></i>
            Warehouses
          </NavLink>

          <NavLink
            to="/inventory"
            className="text-decoration-none text-light p-2 rounded sidebar-link"
          >
            <i className="bi bi-box-seam me-2"></i>
            Inventory
          </NavLink>

          <NavLink
            to="/admins"
            className="text-decoration-none text-light p-2 rounded sidebar-link"
          >
            <i className="bi bi-people me-2"></i>
            Admins
          </NavLink>

          <button
            className="btn btn-danger mt-4"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
      
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;