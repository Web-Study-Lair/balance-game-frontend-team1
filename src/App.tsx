import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GamePlayPage } from "./game-play/game-play.page";
import { EntrancePage } from "./entrance/entrance.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntrancePage />}></Route>
          <Route path="/game-play/:gameId" element={<GamePlayPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
