// src/components/User.jsx
import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
};
export default User;