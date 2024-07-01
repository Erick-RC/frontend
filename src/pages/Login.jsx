import { useAuth } from '../hooks/useAuth';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (email, password) => {
    login(email, password);
  };

  return <AuthForm onSubmit={handleLogin} isLogin={true} />;
};

export default Login;
