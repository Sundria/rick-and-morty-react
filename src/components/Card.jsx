import UseDatafetcher from "../services/Api";
import { useState, useEffect } from "react";
import  Cards  from "./Cards";
import PaginationButtons from "./ui/PaginationButtons";
import CountPages from "./ui/CountPages";
function Card() {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    UseDatafetcher();
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    setPersonagens(pages);
  }, [currentPage, pages]);

  return (
    <div className="container mx-auto">
      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mx-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          personagens.map((personagem) => (
            <Cards
              key={personagem.id}
              name={personagem.name}
              image={personagem.image}
              status={personagem.status}
              location={personagem.name}
              species={personagem.species}
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
