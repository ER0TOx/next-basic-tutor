import React from "react";
import Image from "next/image";

function ImageBox({ src, alt }) {
  return (
    <div className="image-box-group">
      <Image src={src} alt={alt || ""} width={10} height={10} sizes="100vw" />
    </div>
  );
}

export default ImageBox;
