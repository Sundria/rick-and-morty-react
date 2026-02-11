function Cards({ name, image, status, location, species }) {
  return (
    <article className="flex text-white">
      <header>
        <img src={image} alt="" />
      </header>

      <section>
        <ul>
          <li className="flex flex-col">
            <h1>{name}</h1>
            <p class="status">{status}</p>
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
