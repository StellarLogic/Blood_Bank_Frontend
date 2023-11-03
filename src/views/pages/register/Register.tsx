import LoginSidebar from "@/components/loginSidebar/LoginSidebar";
import RegisterForm from "@/composites/registerForm/RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/login");

  return (
    <div className="grid min-h-screen grid-cols-12">
      <div className="flex items-center justify-center col-span-12 md:col-span-8">
        <div className="w-3/4 max-w-[600px]">
          <h2 className="mb-2 text-2xl text-center text-primary-500">
            Create Account
          </h2>
          <RegisterForm successCallBack={navigateToLogin} />
        </div>
      </div>
      <LoginSidebar isLogin={false} onClick={navigateToLogin} />
    </div>
  );
};

export default Register;
