import ProfileModal from "@/composites/ProfileModal/ProfileModal";
import { useAppSelector } from "@/services/store";
import { LoadingOverlay } from "@mantine/core";

const Home = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const { data } = useAppSelector((state) => state.profile);

  if (isLoading) return <LoadingOverlay visible />;

  return (
    <>
      <ProfileModal opened={isAuthenticated && data == null} />
      Home
    </>
  );
};

export default Home;
