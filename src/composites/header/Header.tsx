import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import { RootState } from "@/services/store";
import { Loader } from "@mantine/core";
import { FaHandHoldingWater } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropDown from "../profileDropDown/ProfileDropDown";

const Header = () => {
  const { isLoading, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/login");

  const renderActions = () => {
    if (isLoading)
      return (
        <div className="px-4">
          <Loader size={"sm"} />
        </div>
      );

    if (!isAuthenticated)
      return (
        <Button onClick={navigateToLogin} intent="ghost">
          Sign in
        </Button>
      );

    return <ProfileDropDown />;
  };

  return (
    <Container>
      <div className="top-0 flex items-center justify-between py-4 ">
        <Link
          to="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500"
        >
          <FaHandHoldingWater size={28} className="text-danger-500" />
        </Link>
        {renderActions()}
      </div>
    </Container>
  );
};

export default Header;
