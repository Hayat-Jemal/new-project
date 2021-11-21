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
import OurWork from './Components/OurWork/OurWork';
import About from './Components/About/About';

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
          </Route> */}
          {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* <Route exact path="/ourWork" element={<OurWork />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
