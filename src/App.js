import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Chat Social Media Subjects Index
        </p>
        <a
        className="App-link"
        href="https://jesuschrist.chatscroll.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          chatscroll for Jesus Christ
        </a>
        <a
        className="App-link"
        href="https://chatscroll.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          chatscroll
        </a>
        <a
        className="App-link"
        href="https://sports.chatscroll.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          chatscroll for sports
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
