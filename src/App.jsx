import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Home from '@/pages/Home';
import Events from '@/pages/Events';
import Members from '@/pages/Members';
import Leaderboard from '@/pages/Leaderboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white transition-colors duration-300">
        <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event-timeline" element={<Events />} />
              <Route path="/members" element={<Members />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
  );
}
