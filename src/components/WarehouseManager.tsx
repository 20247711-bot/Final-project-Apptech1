import { useEffect, useState } from "react";
import type { Warehouse } from "../types";
import { defaultWarehouses } from "../data/defaultData";

const WarehouseManager = () => {

  const [warehouses, setWarehouses] = useState<Warehouse[]>(() => {
  const saved = localStorage.getItem("warehouses");

  if (saved && JSON.parse(saved).length > 0) {
    return JSON.parse(saved);
  }

  localStorage.setItem(
    "warehouses",
    JSON.stringify(defaultWarehouses)
  );

  return defaultWarehouses;
});

  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "warehouses",
      JSON.stringify(warehouses)
    );
  }, [warehouses]);

  const addWarehouse = () => {
    if (!name) return;

    setWarehouses([
      ...warehouses,
      {
        id: Date.now(),
        name
      }
    ]);

    setName("");
  };

  const deleteWarehouse = (id: number) => {
    setWarehouses(
      warehouses.filter(w => w.id !== id)
    );
  };

  return (
    <div className="card shadow-sm p-4">
      <h3 className="mb-3">Warehouse Management</h3>

      <input
        className="form-control mb-2"
        placeholder="Warehouse Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="btn btn-primary mb-4"
        onClick={addWarehouse}
      >
        Add Warehouse
      </button>

      <ul className="list-group">
        {warehouses.map(w => (
          <li
            key={w.id}
            className="list-group-item d-flex justify-content-between"
          >
            {w.name}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteWarehouse(w.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseManager;