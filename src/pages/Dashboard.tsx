const Dashboard = () => {
  return (
    <>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Total Warehouses</h5>
            <h3>3</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Total Products</h5>
            <h3>120</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Admins</h5>
            <h3>2</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;