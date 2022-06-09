import React, { useContext, useRef, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from './components/Layout/Layout';
import MainScreen from './screens/MainScreen/MainScreen';
import FilterMain from './screens/FilterScreen/FilterMain';
function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout><MainScreen><FilterMain/></MainScreen></Layout>}/>
        </Routes>
    </div>
  );
}

export default App;
