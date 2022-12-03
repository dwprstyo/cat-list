import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../css/layout.css";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Home from "./pages/Home";

class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="layout-wrapper">
          <div className="layout">
            <Header />
                <Routes>
                    <Route path="/*" element={<Home />}/>
                </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
