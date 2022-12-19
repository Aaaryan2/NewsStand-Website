import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="General"
                  pageSize={this.pageSize}
                  country="In"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="Business"
                  pageSize={this.pageSize}
                  country="In"
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="Entertainment"
                  pageSize={this.pageSize}
                  country="In"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  key="General"
                  pageSize={this.pageSize}
                  country="In"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="Health"
                  pageSize={this.pageSize}
                  country="In"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="Science"
                  pageSize={this.pageSize}
                  country="In"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="Sports"
                  pageSize={this.pageSize}
                  country="In"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  key="Technology"
                  pageSize={this.pageSize}
                  country="In"
                  category="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
