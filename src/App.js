import './App.css';
import CardC from "./components/CardC";
import { Duke } from './classes/Cards';

function App() {
  const card1 = new Duke();

  return (
    <div className="App">
      <CardC card={card1} />
      <CardC card={card1} />
      <CardC card={card1} />
      <CardC card={card1} />
      <CardC card={card1} />
    </div>
  );
}

export default App;
