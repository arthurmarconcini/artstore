"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageViewProps {
  imageUrls?: string[];
}

function ImageView({ imageUrls }: ImageViewProps) {
  const [activeImage, setActiveImage] = useState(imageUrls?.[0]);

  const handleActiveImageUrl = (imageUrl: string) => {
    setActiveImage(imageUrl);
  };

  return (
    <div className="flex w-full flex-col bg-accent">
      <div className="flex h-96 items-center justify-center">
        {activeImage && (
          <Image
            src={activeImage}
            alt="Foto do produto"
            width={0}
            height={0}
            sizes="100vw"
            className="h-96 max-h-[200px] w-full object-contain"
          />
        )}
      </div>

      <div className="flex items-center justify-center rounded-t-lg bg-background">
        <div className=" grid w-[388px] grid-cols-4 gap-3  px-5 py-7">
          {imageUrls?.map((imageUrl) => {
            return (
              <div
                key={imageUrl}
                className={`flex h-20 cursor-pointer items-center justify-center rounded-lg bg-accent transition-all ${
                  activeImage === imageUrl ? "border-2 border-primary" : ""
                }`}
                onClick={() => handleActiveImageUrl(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  alt="Foto do produto"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h-[70%] w-full max-w-[80%] object-contain py-2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageView;
