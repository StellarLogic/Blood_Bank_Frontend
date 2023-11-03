type Props = {
  placeholder: string;
};

const HeroInput = ({ placeholder }: Props) => {
  return (
    <label className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-3 text-lg outline-none md:px-8 md:py-5"
      />
    </label>
  );
};

export default HeroInput;
