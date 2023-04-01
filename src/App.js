import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchCar from "./pages/SearchCar/SearchCar";
import ResultCar from "./pages/ResultCar/ResultCar";
import DetailCar from "./pages/DetailCar/DetailCar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/search-car" component={SearchCar} />
        <Route path="/result-car" component={ResultCar} />
        <Route path="/detail-car" component={DetailCar} />
      </Switch>
    </Router>
  );
};

export default App;
