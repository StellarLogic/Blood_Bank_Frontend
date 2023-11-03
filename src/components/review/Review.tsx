import Image from "../image/Image";

type Props = {
  name: string;
  location: string;
  avatar: string;
  description: string;
};

const Review = ({ name, location, avatar, description }: Props) => {
  return (
    <div className="grid items-center grid-cols-12 gap-4 p-4 border border-gray-300 rounded-3xl md:px-6 md:py-5">
      <Image
        src={avatar}
        alt=""
        className="w-[84px] h-[84px]  rounded-full object-cover col-span-4 md:col-span-1"
      />
      <div className="col-span-8 md:col-span-2">
        <h4 className="text-lg font-medium text-primary-500">{name}</h4>
        <p className="text-gray-500 text-md">{location}</p>
      </div>
      <p className="col-span-12 text-gray-500 md:col-span-9">{description}</p>
    </div>
  );
};

export default Review;
