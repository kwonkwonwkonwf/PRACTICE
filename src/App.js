import './App.css';
import './css/card.css'

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <a href="#">Logo</a>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function Cardo() {
  return (
    <div className="card">카드</div>
  );
}

function App() {
  return (
    <>
      <Nav/>
      <Cardo/>
    </>
  );
}

export default App;
