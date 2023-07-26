import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Favorites from "./components/Header/NavBar/Favorites/Favorites"
import Data from "./components/Header/NavBar/Data/Data";
import Lives from "./components/Header/NavBar/Live/Live";
import History from "./components/Header/Aside/History/History";
import CommingSoon from "./components/Header/Aside/CommingSoon/Soon";
import Results from "./components/Header/Aside/Result/Result";
import Best from "./components/Header/Aside/Best/Best";
import Forecast from "./components/Header/Aside/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/data" element={<Data/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/live" element={<Lives/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/commingSoon" element={<CommingSoon/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/best" element={<Best/>} />
        <Route path="/forecast" element={<Forecast/>} />
      </Routes>
    </div>
  );
}

export default App;
