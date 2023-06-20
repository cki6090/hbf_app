import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
          <Route element={<mainPage />} />
      </Routes>
    </div>
  );
}

export default App;
