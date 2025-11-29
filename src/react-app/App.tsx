import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoginPage from "@/react-app/pages/Login";
import DashboardPage from "@/react-app/pages/Dashboard";
import ProfilePage from "@/react-app/pages/Profile";
import EventsPage from "@/react-app/pages/Events";
import RoomsPage from "@/react-app/pages/Rooms";
import DiningPage from "@/react-app/pages/Dining";
import SportsPage from "@/react-app/pages/Sports";
import RelaxPage from "@/react-app/pages/Relax";
import AffiliationsPage from "@/react-app/pages/Affiliations";
import MeetingsPage from "@/react-app/pages/Meetings";
import TransactionsPage from "@/react-app/pages/Transactions";
import GalleryPage from "@/react-app/pages/Gallery";
import ReviewPage from "@/react-app/pages/Review";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/relax" element={<RelaxPage />} />
        <Route path="/affiliations" element={<AffiliationsPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}
