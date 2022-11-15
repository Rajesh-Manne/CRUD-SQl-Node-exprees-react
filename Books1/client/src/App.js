import React from "react";
import '../src/Style.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Add from './pages/Add';
import Books from './pages/Books';
import Update from "./pages/Update";
function App() {
  return (
    <div className="App">
       <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Books/>}/>
          <Route exact path="/update/:id" element={<Update/>}/>
          <Route exact path="/add" element={<Add/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      {/* </Layout> */}
    </Router>
    </div>
  );
}

export default App;
