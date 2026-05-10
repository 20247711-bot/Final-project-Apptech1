const Dashboard = () => {
  const warehouses = JSON.parse(localStorage.getItem("warehouses") || "[]");
  const stocks = JSON.parse(localStorage.getItem("stocks") || "[]");
  const admins = JSON.parse(localStorage.getItem("admins") || "[]");

  return (
    <>
      <h2 className="fw-bold mb-4">
        Dashboard
      </h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm p-4 stat-card">
            <h5>Warehouses</h5>
            <h1>{warehouses.length}</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4 stat-card">
            <h5>Inventory Stocks</h5>
            <h1>{stocks.length}</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4 stat-card">
            <h5>Admins</h5>
            <h1>{admins.length}</h1>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;