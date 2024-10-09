export default function StickyNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="sticky top-0 z-50 group">
      <div className="flex items-center justify-between h-16 transition-colors duration-300 group-[[data-scroll='true']]:bg-white group-[[data-scroll='true']]:shadow-md">
        {children}
      </div>
    </nav>
  );
}
