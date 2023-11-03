import { Link } from "react-router-dom";

type Props = {
  name: string;
  image?: string;
};

const Category = ({ name, image }: Props) => {
  return (
    <Link
      to="/company/c3/about"
      style={{ backgroundImage: `url(${image})` }}
      className={` min-h-[175px] text-lg rounded-2xl hover:bg-primary-500 text-white capitalize font-normal transition-all duration-300
     bg-cover grid group
      `}
    >
      <div className="w-full h-full col-start-1 row-start-1 transition-all duration-300 bg-gray-800 rounded-2xl bg-opacity-70 group-hover:opacity-20" />
      <div className="flex items-center justify-center col-start-1 row-start-1">
        {name}
      </div>
    </Link>
  );
};

export default Category;
