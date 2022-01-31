import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/pages/landing';
import CreateEvent from './components/pages/CreateEvent';
import Dashboard from './components/pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  return (
      <Router>
          {isLoggedIn ? (
              <Routes>
                  <Route
                    exact
                    path="/"
                    element={<Dashboard setisLoggedIn={setisLoggedIn} />}
                  />
                  <Route exact path="/events/create" element={<CreateEvent />} />
                  <Route
                    path="*"
                    element={<Dashboard setisLoggedIn={setisLoggedIn} />}
                  />
              </Routes>
      ) : (
          <Routes>
              <Route
                exact
                path="*"
                element={<Landing setisLoggedIn={setisLoggedIn} />}
              />
          </Routes>
      )}
      </Router>
  );
}

export default App;
