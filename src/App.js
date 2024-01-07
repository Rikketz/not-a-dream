
import React, { useState } from 'react';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Menu from './Components/Menu/Menu';
import Scene from './Components/Scene/Scene';
export const Contexto = React.createContext();

function App() {
  const [currentCursor, setCurrentCursor] = useState("normal");
  return (
    
    <Contexto.Provider 
      value={{
        currentCursor,
        setCurrentCursor,
      }}>
    <div className="App">
      <header className="App-header">
      <div className='viewport'>
        <div className='viewport-container'>
          <Scene/>
          <div className='viewport__rightContainer'>
            <Menu/>
            <Inventory/>
          </div>
        </div>
      </div>

      </header>
    </div>
    </Contexto.Provider>
  );
}

export default App;
