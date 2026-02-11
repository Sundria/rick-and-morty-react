function Cards({ name, image, status, location, species }) {
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
    <article className="flex flex-row text-white gap-3 rounded-2xl bg-gray-800 overflow-hidden">
      <div className="basis-1/3 max-w-1/3">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`Imagem de ${name}`}
        />
      </div>

      <section className="basis-2/3 max-w-2/3 p-3 gap-2">
        <ul className="flex flex-col h-full justify-between">
          <li className="flex flex-col">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-2 h-2 rounded-full ${situation(status)}`}></div>
              <p className="text-blue-100 capitalize">{status}</p>
            </div>
          </li>
          <li className="flex flex-col">
            <strong>Última localização conhecida:</strong>
            <span>{location}</span>
          </li>
          <li className="flex flex-col">
            <strong>Espécie:</strong>
            <span>{species}</span>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Cards;
