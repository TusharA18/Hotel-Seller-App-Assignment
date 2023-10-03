import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import PropertyIdCard from "./components/PropertyIdCard";

const App = () => {
   return (
      <Routes>
         <Route exact path="/" element={<Navigate to="/property" />} />
         <Route exact path="/property" element={<Home />} />
         <Route exact path="/property/:id" element={<PropertyIdCard />} />
      </Routes>
   );
};

export default App;
