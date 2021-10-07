import turtle from './turtle.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={turtle} alt="turtle image" height={200} width={200} />
        <p>
          Ananya Barman
        </p>
        <a
          className="App-link"
          href="https://i.pinimg.com/originals/2a/a2/65/2aa265a904f209df04af3d15d42012c0.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </header>
    </div>
  );
}

export default App;
