import  { useState } from "react";
import type { Warehouse } from "../types";

const WarehouseManager = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [name, setName] = useState("");

  const addWarehouse = () => {
    if (!name) return;

    const newWarehouse: Warehouse = {
      id: Date.now(),
      name,
      address: "",
      capacity: 0,
      zones: [],
      categories: [],
    };

    setWarehouses([...warehouses, newWarehouse]);
    setName("");
  };

  const deleteWarehouse = (id: number) => {
    setWarehouses(warehouses.filter(w => w.id !== id));
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4>Warehouse Management</h4>

        <input
          className="form-control mb-2"
          placeholder="Warehouse Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-primary" onClick={addWarehouse}>
          Add Warehouse
        </button>

        <ul className="list-group mt-3">
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
    </div>
  );
};

export default WarehouseManager;