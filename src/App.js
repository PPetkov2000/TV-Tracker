import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shows from "./pages/Shows";
import ShowInfo from "./pages/ShowInfo";
import PersonInfo from "./pages/PersonInfo";
import CharacterInfo from "./pages/CharacterInfo";
import EpisodeInfo from "./pages/EpisodeInfo";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/shows/page/:pageNumber" exact element={<Shows />} />
          <Route path="/search/shows/:name" exact element={<Shows />} />
          <Route path="/shows/:id" exact element={<ShowInfo />} />
          <Route path="/episodes/:id" element={<EpisodeInfo />} />
          <Route path="/people/:id" element={<PersonInfo />} />
          <Route path="/characters/:id" element={<CharacterInfo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
