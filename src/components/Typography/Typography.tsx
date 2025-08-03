import React from "react";
import "./Typography.scss";

type TypographyVariant =
  | "heading-01"
  | "heading-02"
  | "heading-03"
  | "body-01"
  | "body-02"
  | "massive";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<TypographyVariant, string> = {
  "heading-01": "typography typography--heading-01",
  "heading-02": "typography typography--heading-02",
  "heading-03": "typography typography--heading-03",
  "body-01": "typography typography--body-01",
  "body-02": "typography typography--body-02",
  massive: "typography typography--massive",
};

export default function Typography({
  variant = "body-01",
  children,
  className = "",
}: TypographyProps) {
  const combinedClasses = className
    ? `${variantClasses[variant]} ${className}`
    : variantClasses[variant];
  return <p className={combinedClasses}>{children}</p>;
}
