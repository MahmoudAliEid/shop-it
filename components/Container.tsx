import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`
      ${className}
          max-w-6xl
            mx-auto
            lx:px-20
            md:px-2
            px-4
          `}
    >
      {children}
    </div>
  );
};

export default Container;
