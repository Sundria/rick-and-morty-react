import { BiCode, BiHeart } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

export default function Footer({ count, episodes }) {
  return (
    <footer className=" bg-neutral-500/10 py-10 px-3" id="about">
      <div className="container mx-auto flex flex-col gap-5">
        <div className="flex gap-8 items-center justify-center flex-wrap">
          <p className="text-gray-200/70">
            Total de personagens:{" "}
            <span className="font-bold underline text-amber-50">{count}</span>
          </p>
          <p className="text-gray-200/70">
            Total de episódios:{" "}
            <span className="font-bold underline text-amber-50">
              {episodes}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-10">
          <a
            href="https://www.linkedin.com/in/adriano-lima-a29039368/"
            className="text-gray-600/80 hover:text-red-400"
            target="_blank"
          >
            <FaLinkedin className="size-9" />
          </a>
          <a
            href="https://github.com/Sundria"
            className="text-gray-600/80 hover:text-red-400"
            target="_blank"
          >
            <GrGithub className="size-9" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-1">
          <BsCodeSlash className="size-5 text-gray-400" strokeWidth={0.7} />
          <p className="text-amber-100/60">
            Made by <strong>Sundria</strong> with
          </p>
          <BiHeart className="size-5 text-red-500" strokeWidth={1} />
        </div>
      </div>
    </footer>
  );
}
