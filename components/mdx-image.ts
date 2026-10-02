import { createElement, type ComponentPropsWithoutRef } from "react";
import { getImageProps } from "next/image.js";

type MdxImageProps = ComponentPropsWithoutRef<"img">;

export default function MdxImage({
  src,
  alt = "",
  width,
  height,
  ...props
}: MdxImageProps) {
  if (typeof src !== "string") {
    throw new Error("MDX images require a string src");
  }

  const imageWidth = Number(width);
  const imageHeight = Number(height);

  if (!Number.isFinite(imageWidth) || !Number.isFinite(imageHeight)) {
    throw new Error("MDX images require numeric width and height values");
  }

  const { props: optimizedProps } = getImageProps({
    ...props,
    src,
    alt,
    width: imageWidth,
    height: imageHeight,
    sizes: "(max-width: 48rem) calc(100vw - 2.5rem), 48rem",
  });

  return createElement("img", optimizedProps);
}
