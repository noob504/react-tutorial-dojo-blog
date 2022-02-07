import React from 'react';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// the above import will throw an error " 'switch' is not exported by react-router-dom"
// this because in react router v6, "Switch" was replaced by "Routes".


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CreateBlog from './Components/CreateBlog/CreateBlog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import NotFound from './Components/NotFound/NotFound';


import "./App.css";

const App = () => {

  // const title = `Welcome To The New Blog`;

  return (
    <Router>

      <div className="App">

        <header>
          <Navbar />
        </header>

        <div className="content">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<CreateBlog />} />

            {/* adding dynamic router parameter */}
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );;
};

export default App;


// the "exact" prop was added to tell react to map the routes only if they're a exact match
