import './App.css';
import Homepage from './pages/Homepage';
import { HashRouter, Routes, Route } from "react-router-dom";
import QuoteForm from './pages/QuoteForm';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/QuoteForm" element={<QuoteForm />} /> 
      </Routes>
    </HashRouter>
  );
}

export default App;
