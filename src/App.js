import { Route, Switch } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import AllMeetUpsPage from "./pages/AllMeetUps";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new">
          <NewMeetupPage />
        </Route>
        <Route path="/favourite">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
