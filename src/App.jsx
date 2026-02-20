import "./Style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import UseDataFetcher from "./services/Api";

function App() {
  const { count, episodes } = UseDataFetcher();
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Footer count={count} episodes={episodes}/>
      {/* 
      <MainContent />
      <Footer /> */}
    </>
  );
}

export default App;
