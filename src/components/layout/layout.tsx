import { Children } from "react";

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <main>{children}</main>
    </>
  );
};
