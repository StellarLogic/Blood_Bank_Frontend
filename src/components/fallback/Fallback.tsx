import { Loader } from "@mantine/core";

const Fallback = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Loader />
    </div>
  );
};

export default Fallback;
