import api from "../services/api";
import { useEffect, useState } from "react";
import Cards from "./Cards";
function Card() {
  const [personagens, setPersonagens] = useState([]);
  async function pegarDados(page) {
    const getCharacters = await api.get(`${page}}`);
    setPersonagens(getCharacters.data.results);
  }

  useEffect(() => {
    pegarDados(1);
  }, []);

  return (
    <div className="container mx-auto">
      <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 p-10">
        {personagens.map((personagem) => (
          <Cards
            key={personagem.id}
            name={personagem.name}
            image={personagem.image}
            status={personagem.status}
            location={personagem.name}
            species={personagem.species}
          />
        ))}
      </section>
    </div>
  );
}

export default Card;
