import images from "@/assets/images/Images";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import { RootState } from "@/services/store";

import Image from "@/components/image/Image";
import { Loader } from "@mantine/core";
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
        <Link to="/">
          <Image
            src={images.logoColored}
            alt=""
            className="w-[150px] md:w-[200px]"
          />
        </Link>
        {renderActions()}
      </div>
    </Container>
  );
};

export default Header;
