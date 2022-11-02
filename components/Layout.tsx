// Imports

// TypeScript
interface LayoutProps {
  children: React.ReactNode;
}

// Functions
function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

// Exports
export default Layout;
