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
    <section className="grid grid-cols-4">
      {personagens.map(personagem => (
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
  );
}

export default Card;
