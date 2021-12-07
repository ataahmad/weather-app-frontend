import './css/App.css';
import Header from './components/Header';
import TimeBox from './components/TimeBox';
import FormBox from './components/FormBox';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container MidBody">
        <div className="row midCards">
          <div className="col-lg-4 timeCard">
            <TimeBox />
          </div>
          <div className="col-lg-8">
            heyyyyy this is Ata
          </div>
        </div>
      </div>
      <FormBox />
    </div>

  );
}

export default App;
