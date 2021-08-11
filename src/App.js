import { Route, Switch } from "react-router-dom";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={SongList} />
        <Route path="/songs/new" exact component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
      </Switch>
    </div>
  );
}

export default App;
