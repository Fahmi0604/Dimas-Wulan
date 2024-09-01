import { useEffect, useState, lazy, createContext } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
const Main = lazy(() => import('./pages/Main'));
const Opening = lazy(() => import('./pages/Opening'));

const namaTema = require('./translation.json')
const tema = require('./theme.json')

export const Context = createContext()

function App() {

  const { nama } = useParams();
  const [isOpen, setisOpen] = useState(false);

  const [isAudio, setIsAudio] = useState(false)
  const [audio,] = useState(new Audio('./assets/backsound.mp3'))
  audio.loop = true;
  audio.preload = 'none'

  const value = {
    isAudio,
    setIsAudio
  }

  const handleAudio = () => {
    if (audio && isAudio) {
      audio.pause();
      setIsAudio(false);
    } else {
      audio.play();
      setIsAudio(true);
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = `${tema[namaTema?.tema]?.colors?.primary}`;
  }, []);

  return (
    <>
      <Context.Provider value={value}>
        {isOpen ?
          (<Main audio={audio} handleAudio={handleAudio} />) :
          (<Opening audio={audio} nama={nama} isOpen={isOpen} setisOpen={(e) => setisOpen(e)} />)
        }
      </Context.Provider>
    </>
  );
}

export default App;
