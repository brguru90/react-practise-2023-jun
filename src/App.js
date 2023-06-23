import './App.css';

import {  BrowserRouter, Routes, Route } from "react-router-dom";

import TestCtx1 from "./pages/test_ctx1";
import TestCtx2 from "./pages/test_ctx2";
import TestReduxAPI1 from './pages/test_redux1';
import TestReduxAPI2 from './pages/test_redux2';
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
            <Route path='/user/redux_1' element={<TestReduxAPI1 />} />
            <Route path='/user/redux_2' element={<TestReduxAPI2 />} />
          </Route>
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
