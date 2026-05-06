import { useState, useEffect } from "react";
import type { Admin } from "../types";

const AdminManager = () => {
  const [admins, setAdmins] = useState<Admin[]>(() => {
    const saved = localStorage.getItem("admins");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");

  useEffect(() => {
    localStorage.setItem("admins", JSON.stringify(admins));
  }, [admins]);

  const addAdmin = () => {
    if (!name || !role) return;

    setAdmins([
      ...admins,
      { id: Date.now(), name, role }
    ]);

    setName("");
    setRole("");
  };

  const deleteAdmin = (id: number) => {
    setAdmins(admins.filter(a => a.id !== id));
  };

  const updateAdmin = () => {
    setAdmins(admins.map(a =>
      a.id === editingId ? { ...a, name: editName, role: editRole } : a
    ));

    setEditingId(null);
    setEditName("");
    setEditRole("");
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4>Admins</h4>

      <input
        className="form-control mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="btn btn-warning mb-3" onClick={addAdmin}>
        Add
      </button>

      <ul className="list-group">
        {admins.map(a => (
          <li key={a.id} className="list-group-item d-flex justify-content-between align-items-center">

            {editingId === a.id ? (
              <>
                <input
                  className="form-control me-2"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />

                <input
                  className="form-control me-2"
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                />

                <button className="btn btn-success btn-sm" onClick={updateAdmin}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{a.name} - {a.role}</span>

                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setEditingId(a.id);
                      setEditName(a.name);
                      setEditRole(a.role);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteAdmin(a.id)}
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

export default AdminManager;