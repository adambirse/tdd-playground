import { Helmet } from "react-helmet";

interface LayoutProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title : "TDD playground"}</title>
      </Helmet>
      <main>{children}</main>
    </>
  );
};
