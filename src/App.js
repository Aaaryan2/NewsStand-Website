import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />

        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="Business"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="Entertainment"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="Health"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="Science"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="Sports"
                pageSize={pageSize}
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
                setProgress={setProgress}
                apiKey={apiKey}
                key="Technology"
                pageSize={pageSize}
                country="In"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
