import ProfileModal from "@/composites/ProfileModal/ProfileModal";
import { useAppSelector } from "@/services/store";
import { LoadingOverlay } from "@mantine/core";

const Home = () => {
  const { data, isLoading } = useAppSelector((state) => state.profile);

  if (isLoading) return <LoadingOverlay visible />;

  return (
    <>
      <ProfileModal opened={!data} />
      Home
    </>
  );
};

export default Home;
