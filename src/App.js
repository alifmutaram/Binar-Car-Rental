import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import SearchCar from './pages/SearchCar/SearchCar'
import DetailCar from './pages/DetailCar/DetailCar'
import React from 'react'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/search-car" component={SearchCar} />
        <Route exact path="/detail-car/:carId" component={DetailCar} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
