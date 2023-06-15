import logo from './logo.svg';
import './App.css';

import { HashRouter,BrowserRouter, Routes, Route } from "react-router-dom";

import TestCtx1 from "./pages/test_ctx1";
import TestCtx2 from "./pages/test_ctx2";
import LandingPage from './pages/lading';
import SideBar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<SideBar />}>
            <Route path='/user/' element={<TestCtx1 />} />
            <Route path='/user/test_ctx2' element={<TestCtx2 />} />
          </Route>
          <Route path='/'  element={<LandingPage />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
