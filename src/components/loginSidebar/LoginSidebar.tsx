import images from "@/assets/images/Images";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Image from "../image/Image";

type Props = {
  isLogin: boolean;
  onClick: () => void;
};

const LoginSidebar = ({ isLogin, onClick }: Props) => {
  return (
    <div className="flex items-center justify-center col-span-12 overflow-hidden md:col-span-4 bg-primary-500">
      <div className="flex flex-col items-center justify-center content">
        <Link to="/">
          <Image src={images.logoWhite} alt="" className="max-w-[400px]" />
        </Link>
        <Button intent="white" onClick={onClick}>
          {isLogin ? "SIGN UP" : "SIGN IN"}
        </Button>
      </div>
    </div>
  );
};

export default LoginSidebar;
