import { useEffect, useState } from "react";
import type { Admin } from "../types";
import { defaultAdmins } from "../data/defaultData";

const AdminManager = () => {

 const [admins, setAdmins] = useState<Admin[]>(() => {
  const saved = localStorage.getItem("admins");

  if (saved && JSON.parse(saved).length > 0) {
    return JSON.parse(saved);
  }

  localStorage.setItem(
    "admins",
    JSON.stringify(defaultAdmins)
  );

  return defaultAdmins;
});

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "admins",
      JSON.stringify(admins)
    );
  }, [admins]);

  const addAdmin = () => {
    if (!name || !role) return;

    setAdmins([
      ...admins,
      {
        id: Date.now(),
        name,
        role
      }
    ]);

    setName("");
    setRole("");
  };

  const deleteAdmin = (id: number) => {
    setAdmins(
      admins.filter(a => a.id !== id)
    );
  };

  return (
    <div className="card shadow-sm p-4">
      <h3 className="mb-3">Admin Management</h3>

      <input
        className="form-control mb-2"
        placeholder="Admin Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button
        className="btn btn-warning mb-4"
        onClick={addAdmin}
      >
        Add Admin
      </button>

      <ul className="list-group">
        {admins.map(a => (
          <li
            key={a.id}
            className="list-group-item d-flex justify-content-between"
          >
            {a.name} - {a.role}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteAdmin(a.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManager;