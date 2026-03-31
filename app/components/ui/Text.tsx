import React, { ReactNode, ElementType } from "react";

type TextProps = {
  as?: ElementType; // can be an HTML tag or a custom component.
  color?: string;   // Tailwind text color
  font?: "body" | "heading";
  className?: string;
  children: ReactNode;
};

// Only define variants for HTML elements, not custom components
type VariantTag = keyof React.JSX.IntrinsicElements;

const variantMap: Partial<Record<VariantTag, string>> = {
  p: "text-[14px] leading-[100%] tracking-tight font-regular",
  span: "text-[12px] leading-[150%] tracking-normal font-thin",
  h6: "text-lg leading-[140%] tracking-[0.25%]",
  h5: "text-xl leading-[135%] tracking-[0.5%]",
  h4: "text-2xl leading-[130%] tracking-[0.75%]",
  h3: "text-[32px] leading-[125%] tracking-[1%]",
  h2: "text-xl lg:text-4xl leading-[120%] tracking-[1.5%]",
  h1: "text-[28px] lg:text-[64px] leading-[115%] tracking-[2%] font-thin",
};

const fontMap: Record<"body" | "heading", string> = {
  body: "leading-[150%] tracking-normal",
  heading: "leading-[150%] tracking-normal"
};

export default function Text({
  as: Component = "p",
  color = "",
  font = "body",
  className = "",
  children,
}: TextProps) {
  // Only apply variantMap if it's an intrinsic element
  const baseClass =
    typeof Component === "string"
      ? variantMap[Component as VariantTag] ?? variantMap.p
      : "";

  const fontClass = fontMap[font];
  const combinedClass = `${baseClass} ${fontClass} ${color} ${className}`.trim();

  return <Component className={combinedClass}>{children}</Component>;
}
