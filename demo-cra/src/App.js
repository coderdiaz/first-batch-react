// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import Account from './Account';
// camelCase -> sidebarEjemplo
// <svg><path stroke-width="3" /></svg>
// <svg><path strokeWidth="3" /></svg>

function App() {
  return (
    <div className="App">
      <Account
        title="Available Balance"
        growthValue="2.0"
        total="45000"
        currency="USD"
      />
      <Account
        title="Pending Balance"
        growthValue="-4.0"
        total="865"
        currency="COL"
      />
      {/* <header class="App-header"></header> */}
      {/* <header className="App-header">
        <Hello />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
