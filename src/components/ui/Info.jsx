import { useState } from "react";
import { ImInfo } from "react-icons/im";

export default function Info() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center"
      >
        <ImInfo />
      </button>

      <div className={`absolute right-0 mt-2 w-48 bg-gray-600 rounded-lg shadow-lg ${isOpen ? "" : "opacity-0 invisible"} group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 p-4`}>
          <p className="text-white">
            This is a personal project created with the intention of improving
            understanding of React and how it works. I used the{" "}
            <a
              href="https://rickandmortyapi.com/documentation"
              target="_blank"
              className="text-amber-50 underline"
            >
              Rick and Morty
            </a>{" "}
            API to create this page, and I welcome criticism and advice to
            improve it.
          </p>
        </div>
    </div>
  );
}
