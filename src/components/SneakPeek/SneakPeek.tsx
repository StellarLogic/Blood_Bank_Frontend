import { Link } from "react-router-dom";

type Props = {
  label: string;
  description: string;
  image: string;
};

const SneakPeek = ({ label, description, image }: Props) => {
  return (
    <Link
      to="#"
      style={{ backgroundImage: `url(${image})` }}
      className={`h-[450px] md:h-[700px] text-lg hover:bg-primary-500 text-ternary-400  relative block group`}
    >
      <div className="relative z-20 flex flex-col w-full h-full px-10 py-14">
        <div className="flex-1 ">
          <h3 className="w-2/3 mx-auto text-3xl font-bold text-center ">
            {label}
          </h3>
        </div>
        <div className="mx-auto text-center ">
          <p className="font-medium text-md">{description}</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 bg-gray-800 bg-opacity-50 group-hover:opacity-90 " />
    </Link>
  );
};

export default SneakPeek;
