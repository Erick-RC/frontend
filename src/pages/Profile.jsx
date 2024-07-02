import { authHook } from '../hooks/authHook';

const Profile = () => {
  const { user, logout } = authHook();

  if (!user) return null;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <p>Biography: {user.biografia}</p>
      <p>Phone: {user.phone}</p>
      <p>Photo: <img src={user.photo} alt="profile" /></p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
