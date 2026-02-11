import "./Style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card />
      {/* 
      <MainContent />
      <Footer /> */}
    </div>
  );
}

export default App;
