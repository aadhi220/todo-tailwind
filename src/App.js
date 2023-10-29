import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
function App() {
  const [darkMode,setDarkMode]=useState(false)
  return (
    <div className={`${darkMode && 'dark'} App transition-all duration-1000 `}>
     
    <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
