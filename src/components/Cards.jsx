import { BiQuestionMark } from "react-icons/bi";
import { GiFemale, GiMale } from "react-icons/gi";

function Cards({
  url,
  name,
  image,
  status,
  location,
  species,
  origin,
  gender,
}) {
  const situation = (value) => {
    if (value === "Alive") {
      return "bg-green-500";
    } else if (value === "Dead") {
      return "bg-red-500";
    } else {
      return "bg-gray-500";
    }
  };

  return (
    <article className="flex text-white md:gap-3 rounded-2xl bg-gray-800 overflow-hidden max-sm:flex-col inset-shadow-sm inset-shadow-teal-700/70">
      <div className="basis-1/3 max-w-1/3 max-sm:max-w-full max-sm:h-3/5">
        <img
          className="w-full h-full object-cover max-sm:object-cover"
          src={image}
          alt={`Imagem de ${name}`}
        />
      </div>

      <section className="basis-2/3 max-w-2/3 p-3 max-sm:h-2/5 max-sm:max-w-full max-sm:py-0">
        <ul className="flex flex-col h-full justify-between max-sm:justify-evenly ">
          <li className="flex flex-col">
            <h1 className="text-2xl font-bold font-poppins">
              <a href={url} target="_blank" className="hover:text-red-400">
                {name}
              </a>
            </h1>
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-2 h-2 rounded-full ${situation(status)}`}
              ></div>
              <p className="text-blue-100 capitalize">
                {status} - {species}
              </p>
            </div>
          </li>
          <li className="flex flex-col">
            <p className="font-bold text-gray-400">Last known location:</p>
            <a
              
              href={location.url || "#"}
              target={location?.url && "_blank"}
              rel={location?.url ? "noreferrer noopener" : undefined}
              className="text-sm hover:text-red-400"
            >
              {location.name}
            </a>
          </li>
          <li className="flex gap-10">
            <div className="flex flex-col">
              <p className="font-bold text-gray-400">Origin:</p>
              <a
                href={origin.url || "#"}
                target={origin?.url && "_blank"}
                rel={origin?.url ? "noreferrer noopener" : undefined}
                className="text-sm hover:text-red-400"
              >
                {origin.name}
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-gray-400">Gender:</p>
              <span className="flex justify-center">
                {gender === "Male" && (
                  <GiMale className="text-blue-600 size-5" />
                )}
                {gender === "Female" && (
                  <GiFemale className="text-pink-600 size-5" />
                )}
                {gender === "unknown" && (
                  <BiQuestionMark className="text-yellow-500 size-5" />
                )}
              </span>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Cards;
