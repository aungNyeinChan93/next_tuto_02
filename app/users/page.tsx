"use client";

import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUser] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const { users } = await response.json();
    setUser(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <React.Fragment>
      <section>
        <p>Users lists</p>
        <ul>
          {users &&
            Array.isArray(users) &&
            users?.map((user: any) => <li key={user?.id}>{user?.username}</li>)}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Users;
