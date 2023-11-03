import LoginSidebar from "@/components/loginSidebar/LoginSidebar";
import LoginForm from "@/composites/loginForm/LoginForm";
import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const navigateToRegister = () => navigate("/register");

  const successCallBack = () => navigate("/");

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="grid min-h-screen grid-cols-12">
      <LoginSidebar isLogin onClick={navigateToRegister} />
      <div className="flex items-center justify-center col-span-12 md:col-span-8">
        <div className="w-3/4 max-w-[600px]">
          <h2 className="mb-2 text-2xl text-center text-primary-500">
            Sign In
          </h2>
          <LoginForm successCallBack={successCallBack} />
        </div>
      </div>
    </div>
  );
};

export default Login;
