import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouses";
import Inventory from "./pages/Inventory";
import Admins from "./pages/Admins";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="warehouses" element={<Warehouses />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="admins" element={<Admins />} />
      </Route>

    </Routes>
  );
}

export default App;