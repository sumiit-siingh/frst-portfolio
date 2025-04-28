import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Layout from "./layout";
import './index.css';
import './component/ui/Spotlight'
import About from './pages/about'
import Text from "./pages/text"
import projects from "./pages/projects";
import Projects from "./pages/projects";

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
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
