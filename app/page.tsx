import { useAppSelector } from "./services/store/store";

export default function Home() {
  // const { user } = useAppSelector((state) => state.auth);

  return (
    <main>
      <div className="h-[80vh] flex justify-center items-center">
        <h1 className="text-red-500 font-bold text-4xl">
          Welcome To Blood Bank
          {/* <p className="text-center mt-2">{user?.name}</p> */}
        </h1>
      </div>
    </main>
  );
}
