export default function Footer({ count, episodes }) {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="flex gap-8 justify-center">
          <p>Total de personagens: {count}</p>
          <p>Total de episódios: {episodes}</p>
        </div>
        <div>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div>D</div>
      </div>
    </footer>
  );
}
