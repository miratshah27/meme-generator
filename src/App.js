import './App.css';
import {useState, useEffect} from 'react';
import Templates from './components/Templates';
import Meme from './components/Memes';

function App() {
  const [templates, setTemplate] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      setTemplate(data.data.memes);
    })
  }, [])

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? <Templates templates={templates} setMeme={setMeme}/> : <Meme meme={meme} setMeme={setMeme}/>}
      
    </div>
  );
}

export default App;
