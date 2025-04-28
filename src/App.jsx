import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./layout";
import './index.css';
import './component/ui/Spotlight'
import About from './pages/about'
// import Text from "./pages/text"
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      {/* <Layout/> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* <Route path="/homepage" element={<Homepage/>}/> */}
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/about me" element={<About/>}/>
          {/* <Route path="/text" element={<Text/>}/> */}
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
