import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
