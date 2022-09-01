
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';


function App() {
// const [selectedOption, setSelectedOption] = useState
// (request.fetchTrending)

  return (
    <div className="App">
     <Header   />
     <Navbar   />
     <Results    />
    </div>
  );
}

export default App;
