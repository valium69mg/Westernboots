import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
