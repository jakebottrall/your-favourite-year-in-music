import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Callback } from "./routes/Callback";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { spotifyApi } from "./services/spotifyApi";

const accessToken = localStorage.getItem("access_token");

if (accessToken) {
  spotifyApi.setAccessToken(accessToken);
}

export function App() {
  const [isAuthed, setIsAuthed] = useState(!!accessToken);

  const handleError = () => {
    localStorage.clear();
    setIsAuthed(false);
  };

  return (
    <div className="h-screen w-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<ProtectedRoute isAuthed={isAuthed} />}>
          <Route path="/" element={<Home onError={handleError} />} />
        </Route>
        <Route path="/login" element={<Login isAuthed={isAuthed} />} />
        <Route
          path="/callback"
          element={<Callback onAuth={() => setIsAuthed(true)} />}
        />
      </Routes>
    </div>
  );
}
