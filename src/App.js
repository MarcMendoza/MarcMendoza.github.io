import logo from './logo.svg';
import './App.css';

const App = () => {
  let startDate = new Date(2021, 1, 1);
  let oneDay = 1000 * 60 * 60 * 24;
  let today = new Date();

  let numOfDaysDif = Math.floor((today.getTime() - startDate.getTime()) / oneDay);
  let isEven = numOfDaysDif % 2

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Whose turn is it today?
        </h1>
        <p>
          {isEven === 0 ? "Blackhole" : "Demon Princess"}
        </p>
      </header>
    </div>
  );
}

export default App;
