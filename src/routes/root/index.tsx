import { useState } from "react";
import reactlogo from "../../assets/react.svg";
import vitelogo from "/vite.svg";
import { Link } from "react-router";
export const RootRoute = () => {
        const [count, setCount] = useState(0);
        const [title, setTitle] = useState("seiz ");
        
        return (
          <div className="h-dvh flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <h1 className="text-center font-bold text-3xl text-blue-400 mb-4">
                {title}
              </h1>
      
              <div className="flex justify-center space-x-4 mb-2">
                <a href="https://vite.dev" target="_blank">
                  <img src={vitelogo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactlogo} alt="React logo" />
                </a>
              </div>
      
              <h2 className="text-center font-bold text-xl mb-6">Vite + React</h2>
      
              <div className="flex flex-col items-center space-y-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Hai premuto il pulsante {count} {count === 1 ? "volta" : "volte"}
                </button>
      
                <button
                  onClick={() => setTitle("BLASTUAAAAAA")}
                >
                  cambia titolo
                </button>
                <p className="text-center">
                  Modifica <code>src/App.tsx</code> e salva per testare l'hot reload
                </p>
              </div>
                <a href="/dettaglio/0">link</a>
              <p className="text-center text-sm text-blue-400">Clicca sui loghi per saperne di più</p>

              <Link 
              to={'/dettaglio/$(count)'}
              >
                link {count}
              </Link>
            </div>
          </div>
        );
      
      
    return null
}