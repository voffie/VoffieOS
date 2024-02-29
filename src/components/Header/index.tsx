export const Header = () => {
  return (
    <nav className="bar-bg absolute left-0 right-0 top-0 flex h-7 items-center justify-center text-white">
      <p>{new Date().toDateString()}</p>
    </nav>
  );
};
