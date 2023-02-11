import data from "./data";

import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
