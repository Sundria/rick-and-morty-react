import UseDatafetcher from "../services/Api";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import PaginationButtons from "./ui/PaginationButtons";
import CountPages from "./ui/CountPages";
function Card() {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    UseDatafetcher();
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    setPersonagens(pages);
  }, [currentPage, pages]);
  console.log(personagens);

  return (
    <div className="container mx-auto">
      <section className={loading ? "flex items-center justify-center my-10" : "grid lg:grid-cols-2  max-sm:grid-cols-1 gap-6 mx-5"}>
        {loading ? (
          <div className="text-white text-center">Something went wrong.</div>
        ) : (
          personagens.map((personagem) => (
            <Cards
              key={personagem.id}
              url={personagem.url}
              name={personagem.name}
              image={personagem.image}
              status={personagem.status}
              location={personagem.location}
              species={personagem.species}
              origin={personagem.origin}
              gender={personagem.gender}
            />
          ))
        )}
      </section>
      <CountPages count={currentPage + 1} totalPages={totalPages} />
      <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Card;
