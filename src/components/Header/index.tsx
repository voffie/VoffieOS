export const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 h-7 bar-bg flex items-center justify-center">
      <p>{new Date().toDateString()}</p>
    </nav>
  );
};
