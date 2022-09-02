import { ReactElement, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/landingpage/navbar/Navbar";
import { Footer } from "./components/landingpage/footer/Footer";
import { AppBar } from "./components/appbar/AppBar";
import GlobalStyle from './GlobalStyles';
import { Create } from "./pages/Create";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Meet } from "./pages/Meet";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { Leaflet } from "./components/leaflet/Leaflet";
import { InstaStory } from "./pages/InstaStory";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<AppLayout />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="universities" element={<Leaflet props={{}} search={true} />} />
        </Route>

        <Route element={<Outlet />}>
          <Route path="/*" element={<AppAction />} />
        </Route>
      </Routes>
    </Router>
  )
}

function AppAction() {

  const location = useLocation()
  const storyPath = location.pathname.includes('/story')
  const createPath = location.pathname.includes('/create')
  const story = storyPath || createPath

  return <>
    <AppBar story={story} />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="story/:universityId" element={<InstaStory />} />
      <Route path="meet" element={<Meet />} />
      <Route path="create" element={<Create />} />
      <Route path="chat" element={<Chat />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </>
}

function AppLayout() {
  return <>
    <Navbar />
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
    <Footer />
  </>
}

export default App;

function useRoute() {
  throw new Error("Function not implemented.");
}
