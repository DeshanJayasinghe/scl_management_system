import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>

      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm bg-white">
            <h3 className="font-semibold">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
