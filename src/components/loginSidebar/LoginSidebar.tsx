import { FaHandHoldingWater } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button/Button";

type Props = {
  isLogin: boolean;
  onClick: () => void;
};

const LoginSidebar = ({ isLogin, onClick }: Props) => {
  return (
    <div className="flex items-center justify-center col-span-12 overflow-hidden md:col-span-4 bg-primary-500">
      <div className="flex flex-col items-center justify-center content">
        <Link
          to="/"
          className="flex items-center justify-center p-4 mb-12 bg-white rounded-full"
        >
          <FaHandHoldingWater size={48} className="text-primary-500" />
        </Link>
        <Button intent="white" onClick={onClick}>
          {isLogin ? "SIGN UP" : "SIGN IN"}
        </Button>
      </div>
    </div>
  );
};

export default LoginSidebar;
