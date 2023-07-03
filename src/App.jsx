import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Shape from "./Components/Shape";
import Navbar from "./Components/Navbar";
import Playground from "./Components/Playground";

function App() {
  return (
    <motion.div 
    initial={{opacity:0.2}}
    animate={{opacity:1}}
    transition={{duration:1, ease: "easeOut"}}
    >
      <Navbar />
      <Router>
        <Routes>
        <Route key={Router.path} path="/" element={<Shape />} />
        <Route path="/Playground" element={<Playground />} />
        </Routes>
      </Router>
    </motion.div>
  );
}

export default App;
