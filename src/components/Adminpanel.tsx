import  { useState } from "react";
import type { Admin } from "../types";

const AdminManager = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addAdmin = () => {
    if (!name || !role) return;

    const newAdmin: Admin = {
      id: Date.now(),
      name,
      role,
    };

    setAdmins([...admins, newAdmin]);
    setName("");
    setRole("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Admin Management</h4>

        <input
          className="form-control mb-2"
          placeholder="Admin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Role (e.g. Super Admin)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button className="btn btn-warning" onClick={addAdmin}>
          Add Admin
        </button>

        <ul className="list-group mt-3">
          {admins.map(a => (
            <li key={a.id} className="list-group-item">
              {a.name} - {a.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminManager;