import "./Style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/MainContent";
import Footer from "./components/Footer";
import UseDataFetcher from "./services/Api";

function App() {
  const { count, episodes } = UseDataFetcher();
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer count={count} episodes={episodes} />
    </>
  );
}

export default App;
