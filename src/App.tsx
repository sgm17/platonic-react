import { ReactElement, useRef, useState } from "react";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/appbar/Navbar";
import { Bottom } from "./components/bottom/Bottom";
import { Footer } from "./components/footer/Footer";
import { Homebar } from "./components/homebar/Homebar";
import { LeafletExample } from "./components/map/LeafletRegister";
import GlobalStyle from './globalStyles';
import { Add } from "./pages/Add";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Meet } from "./pages/Meet";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<AppLayout />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<Outlet />}>
          <Route path="/*" element={<AppAction />} />
        </Route>
      </Routes>
    </Router>
  )
}

function AppAction() {
  const [select, setSelect] = useState(0)

  return <>
    <Routes>
      <Route path="add" element={<Add />} />
      <Route path="/*" element={<HomeLayout select={select} setSelect={setSelect} />} />
    </Routes>
  </>
}

function HomeLayout(props: any) {
  const { select, setSelect } = props
  const [popup, setPopup] = useState(false)
  const [story, setStory] = useState(false)

  return <>
    {!story && <Homebar select={select} setSelect={setSelect} popup={popup} setPopup={setPopup} />}
    <Routes>
      <Route path="home" element={<Home popup={popup} setPopup={setPopup} story={story} setStory={setStory} />} />
      <Route path="meet" element={<Meet />} />
      <Route path="chat" element={<Chat />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
    {!story && <Bottom select={select} setSelect={setSelect} />}
  </>
}

function AppLayout() {
  return <>
    <Navbar />
    <Routes>
      <Route index element={<Index />} />
    </Routes>
    <Footer />
  </>
}

export default App;

export type HomeLayoutType = {
  to: string,
  fill: ReactElement<any>,
  outline: ReactElement<any>
}