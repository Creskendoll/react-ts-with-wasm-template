import React, { useEffect, useState } from 'react';
import logo from './res/wasm-logo.png';
import './App.css';
import { MyWasm } from "./types/my-wasm";

const App: React.FC = () => {

  // We can get away without explicitly specifing a type but then the linter wouldn't know the type of {wasm}
  // This will initialize {wasm} as undefined
  const [wasm, setWasm] = useState<MyWasm>();

  // Same as component did mount, called when the component is first initialized
  useEffect(() => {
    loadWasm();
  }, []);

  // Asyncronously load webassembly
  const loadWasm = async () => {
    try {
      const wasm = await import('my-wasm');
      // Update state
      setWasm(wasm);
    } catch(err) {
      console.error('Unexpected error in loadWasm. [Message: ${err.message}]');
    }
  }

  const onLogoClick = () => {
    // Check if wasm is loaded
    if(wasm) {
      wasm.greet("Hello from WASM!");
    }
  }

  // Since we need to load web assembly asynchronously, the {wasm} object won't be available right away
  // So we conditionally render a loading text until {wasm} is ready
  return (
    <div className="App">
      {wasm ? (
          <header className="App-header">
            <h1>
              Click the logo to verify your setup.
            </h1>
            <img src={logo} className="App-logo" alt="logo" onClick={onLogoClick} style={{cursor: "pointer"}} />
          </header>
          ) : (
            <header className="App-header">
              <h1>
                Loading WASM...
              </h1>
            </header>
          )
      }
    </div>
  );
}

export default App;
