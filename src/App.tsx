import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DemoPlayerThemeComponent from './pages/DemoPlayerThemeComponent';
import DemoHoverComponent from './pages/DemoHoverComponent';
import DemoClickComponent from './pages/DemoClickComponent';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-player-theme" element={<DemoPlayerThemeComponent />} />
        <Route path="/demo-hover" element={<DemoHoverComponent />} />
        <Route path="/demo-click" element={<DemoClickComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
