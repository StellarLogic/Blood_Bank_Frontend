import { HTMLProps } from "react";

type ImageComponentProps = {
  src: string;
} & HTMLProps<HTMLImageElement>;

const Image = ({ src, ...props }: ImageComponentProps) => {
  return <img loading="lazy" src={src} {...props} />;
};

export default Image;
