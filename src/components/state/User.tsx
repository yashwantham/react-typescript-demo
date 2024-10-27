import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Yashwanth",
      email: "yashwanth@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </>
  );
}
