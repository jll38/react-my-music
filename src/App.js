import logo from './logo.svg';
import './App.css';
import Cards
 from './components/cards';
import Nav from './components/nav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <div className='heading'>
        <h1>Cool Music By Me</h1>
        <div className='subtext'>The Julian Lechner Experience</div>
        </div>
        <Cards></Cards>
      </header>
    </div>
  );
}

export default App;
