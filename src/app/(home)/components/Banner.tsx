import Image, { ImageProps } from "next/image";

function Banner({ alt, src, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      {...props}
      className="h-full w-full object-contain px-5"
      sizes="100vw"
    />
  );
}

export default Banner;
