
interface LayoutProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <head>
        <title>{title ? title : 'TDD playground'}</title>
      </head>
      <main>{children}</main>
    </>
  );
};
