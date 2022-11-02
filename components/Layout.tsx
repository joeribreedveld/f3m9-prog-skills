// Imports

// TypeScript
interface LayoutProps {
  children: React.ReactNode;
}

// Functions
function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="text-center h-screen w-screen flex items-center justify-center">
        {children}
      </main>
    </>
  );
}

// Exports
export default Layout;
