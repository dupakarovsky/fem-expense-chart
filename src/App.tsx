import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import typescriptLogo from "/typescript.svg";
import { Icon } from "./components/Icon/Icon";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="logo-box">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://typescriptlang.org" target="_blank">
                    <img src={typescriptLogo} className="logo" alt="Typescript logo" />
                </a>
                <a href="#">
                    <Icon id="icon-html-five" width={120} height={120} fillColor="royalblue" stroke="transparent" />
                </a>
            </div>
            <h1>Vite + React + TypeScript</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            </div>
        </>
    );
}

export default App;
