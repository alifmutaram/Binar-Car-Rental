import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchCar from "./pages/SearchCar/CariMobil";
// import SearchCar from "./components/Pages/SearchCar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/search-car" component={SearchCar} />
      </Switch>
    </Router>
  );
};

export default App;
