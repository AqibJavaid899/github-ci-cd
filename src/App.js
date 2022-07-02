import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This project is created by Aqib Javaid</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This project is created as a demo to learn CI/CD Concept.
        </a>
      </header>
    </div>
  );
}

export default App;
