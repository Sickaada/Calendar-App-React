import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import Landing from './components/pages/landing';
import CreateEvent from './components/pages/createEvent';
import ShowEvent from './components/pages/showEvents';
import Home from './components/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Home setisLoggedIn={setisLoggedIn} /> : (<Landing setisLoggedIn={setisLoggedIn} />)} />
        <Route exact path="/createEvent" element={isLoggedIn ? <CreateEvent /> : (<Landing setisLoggedIn={setisLoggedIn} />)} />
        <Route exact path="/showEvents" element={isLoggedIn ? <ShowEvent /> : (<Landing setisLoggedIn={setisLoggedIn} />)} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
