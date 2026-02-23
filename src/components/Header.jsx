import Info from "../components/ui/Info";

function Header() {
  return (
    <header>
      <div className="container mx-auto px-7 py-5 flex justify-between text-white items-center bg-neutral-500/10 rounded-b-2xl">
        <a href="#" className="text-2xl font-bold hover:text-red-400">
          Rick & Morty
        </a>
        <nav className="navbar">
          <ul className="flex space-x-4 items-center">
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 text-sm font-poppins"
              >
                CONTACT
              </a>
            </li>
            <li>
              <Info />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
