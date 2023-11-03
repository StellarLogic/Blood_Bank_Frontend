import Button from "@/components/button/Button";
import { logOut } from "@/reducers/auth/auth";
import { AppDispatch } from "@/services/store";
import { Menu } from "@mantine/core";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProfileDropDown = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Menu width={200} position="top-end">
      <Menu.Target>
        <Button intent="ghost" size="small">
          <FaUserCircle size={24} className="text-primary-500" />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Profile</Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" onClick={handleLogOut}>
          {/* <Button onClick={handleLogOut} intent="ghost" size="full"> */}
          Log Out
          {/* </Button> */}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileDropDown;
