import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='slider'>
          <div className="card">
            <div className="card-img">
              <img src="https://i1.sndcdn.com/artworks-Dh2POGVpVbHuSmW8-tjpxsg-t500x500.jpg"></img>
            </div>
            <div className="content">
              <div className="title"><a href="https://soundcloud.com/jlucher/green-hill-zone-chill-electronic-remix" target="_blank">Green Hill Zone - Chill Electronic Mix</a></div>
              <div className='subtitle'>2022</div>
              <div className="song-player"><audio controls><source src="music/GHZ-JLucher.mp3" type="audio/mp3"></source></audio></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
