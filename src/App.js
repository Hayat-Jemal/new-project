import './App.css';
// import Home from './Components/Home/Home';
import React from "react";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>
            {/* <Home /> */}
          </Route>
          {/* <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <C />
          </Route> */}
          <Route path="/" element={<Checkout />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
