function Header() {
  return (
    <header className="">
      <div className="container mx-auto p-5 flex justify-between text-white items-center bg-neutral-500/10 rounded-b-2xl">
        <h1 className="text-2xl font-bold">Rick & Morty</h1>
        <nav className="">
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
