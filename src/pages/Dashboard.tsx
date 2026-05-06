
import WarehouseManager from "../components/Warehouse";
import InventoryManager from "../components/Inventory";
import AdminManager from "../components/Adminpanel";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Admin Dashboard</h1>

      <WarehouseManager />
      <InventoryManager />
      <AdminManager />
    </div>
  );
};

export default Dashboard;