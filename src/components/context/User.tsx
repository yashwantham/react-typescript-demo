import { useContext } from "react";
import { UserContext } from "./UserContext";

export function User() {
  const userDeet = useContext(UserContext);
  const handleLogin = () => {
    if (userDeet) {
      userDeet.setUser({
        name: "Yashwanth",
        email: "yash@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userDeet) {
      userDeet.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userDeet?.user?.name}</div>
      <div>User email is {userDeet?.user?.name}</div>
    </div>
  );
}
