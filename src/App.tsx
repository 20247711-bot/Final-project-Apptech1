import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouses";
import Inventory from "./pages/Inventory";
import Admins from "./pages/Admins";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="warehouses" element={<Warehouses />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="admins" element={<Admins />} />
      </Route>
    </Routes>
  );
}

export default App;