import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import Index from "./pages/Dinosaur.jsx";
import Home from "./pages/Home.jsx";
import Start from "./pages/Start.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Faq from "./pages/Faq.jsx";
import Products from "./pages/Products.jsx";
import './index.css'

export default function App(props){
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>} ></Route>
        <Route exact path="/Home" element={<Home></Home>} ></Route>
        <Route exact path="/Start" element={<Start></Start>} ></Route>
        <Route exact path="/About" element={<About></About>} ></Route>
        <Route exact path="/Blog" element={<Blog></Blog>} ></Route>
        <Route exact path="/Faq" element={<Faq></Faq>} ></Route>
        <Route exact path="/Products" element={<Products></Products>} ></Route>

      </Routes>
    </Router>
  )
}
