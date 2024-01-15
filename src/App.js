
import React, { useState } from 'react';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Menu from './Components/Menu/Menu';
import Scene from './Components/Scene/Scene';
export const Contexto = React.createContext();

function App() {
  const [currentCursor, setCurrentCursor] = useState("normal");
  const [inventoryItems, setInventoryItems] = useState([]);

  const addToInventory = (item) => {
    console.log(inventoryItems)
    setInventoryItems((prevItems) => [...prevItems, item]);
  };

  return (
    
    <Contexto.Provider 
      value={{
        currentCursor,
        setCurrentCursor,
        addToInventory,
        inventoryItems,
      }}>
    <div className="App">
      <header className="App-header">
      <div className='viewport'>
        <div className='viewport-container'>
          <Scene/>
          <div className='viewport__rightContainer'>
            <Menu/>
            <Inventory inventoryItems={inventoryItems}/>
          </div>
        </div>
      </div>

      </header>
    </div>
    </Contexto.Provider>
  );
}

export default App;
