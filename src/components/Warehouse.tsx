import { useState, useEffect } from "react";
import type { Warehouse } from "../types";

const WarehouseManager = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>(() => {
    const saved = localStorage.getItem("warehouses");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    localStorage.setItem("warehouses", JSON.stringify(warehouses));
  }, [warehouses]);

  const addWarehouse = () => {
    if (!name) return;

    setWarehouses([
      ...warehouses,
      { id: Date.now(), name }
    ]);

    setName("");
  };

  const deleteWarehouse = (id: number) => {
    setWarehouses(warehouses.filter(w => w.id !== id));
  };

  const updateWarehouse = () => {
    setWarehouses(warehouses.map(w =>
      w.id === editingId ? { ...w, name: editName } : w
    ));
    setEditingId(null);
    setEditName("");
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4>Warehouses</h4>

      <input
        className="form-control mb-2"
        placeholder="Warehouse Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn btn-primary mb-3" onClick={addWarehouse}>
        Add
      </button>

      <ul className="list-group">
        {warehouses.map(w => (
          <li key={w.id} className="list-group-item d-flex justify-content-between align-items-center">

            {editingId === w.id ? (
              <>
                <input
                  className="form-control me-2"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button className="btn btn-success btn-sm" onClick={updateWarehouse}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{w.name}</span>
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setEditingId(w.id);
                      setEditName(w.name);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteWarehouse(w.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseManager;