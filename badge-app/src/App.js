import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Badges from './pages/Badges';
import BadgeDetail from './pages/BadgeDetail';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Your Menu Component here if any */}
        <Routes>
          <Route path="/" element={<Badges />} />
          <Route path="/badge/:badgeId" element={<BadgeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
