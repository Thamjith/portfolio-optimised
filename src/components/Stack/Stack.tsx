import React from "react";
import type { ReactNode } from "react";
import "./Stack.scss";

// Define the types for flex properties
type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
type AlignContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";
type Gap = string | number;

// Define the props interface
interface StackProps {
  children: ReactNode;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  gap?: Gap;
  className?: string;
  style?: React.CSSProperties;
}

const Stack: React.FC<StackProps> = ({
  children,
  direction = "row",
  wrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "stretch",
  gap = 0,
  className = "",
  style = {},
  ...rest
}) => {
  // Generate CSS classes based on props
  const directionClass = `stack__${direction}`;
  const wrapClass = `stack__${wrap}`;
  const justifyClass = `stack__justify-${justifyContent}`;
  const alignItemsClass = `stack__align-${alignItems}`;
  const alignContentClass = `stack__align-content-${alignContent}`;

  // Handle gap with inline style since it's dynamic
  const gapStyle =
    gap !== 0 ? { gap: typeof gap === "number" ? `${gap}px` : gap } : {};

  // Combine all classes
  const stackClasses = [
    "stack",
    directionClass,
    wrapClass,
    justifyClass,
    alignItemsClass,
    alignContentClass,
    className,
  ].join(" ");

  return (
    <div className={stackClasses} style={{ ...gapStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

export default Stack;
