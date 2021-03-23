import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shows from "./pages/Shows";
import ShowInfo from "./pages/ShowInfo";
import PersonInfo from "./pages/PersonInfo";
import CharacterInfo from "./pages/CharacterInfo";
import EpisodeInfo from "./pages/EpisodeInfo";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Shows} />
          <Route path="/shows/page/:pageNumber" exact component={Shows} />
          <Route path="/search/shows/:name" exact component={Shows} />
          <Route path="/shows/:id" exact component={ShowInfo} />
          <Route path="/episodes/:id" component={EpisodeInfo} />
          <Route path="/people/:id" component={PersonInfo} />
          <Route path="/characters/:id" component={CharacterInfo} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
