import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Explore from "./links/Explore";
import Geners from "./links/Geners";
import Favourites from "./links/Favourites";

export default function App() {
  return (
    <div className="flex min-h-screen">

      {/* Left */}
      <Sidebar />

      {/* Right */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Geners" element={<Geners />} />
          <Route path="/Favourites" element={<Favourites />} />

        </Routes>
      </main>

    </div>
  );
}