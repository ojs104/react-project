import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import { link } from './utils/link';
import { smooth } from './utils/smooth';



const App = () => {
  useEffect(() => {
    smooth();
    link();

  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
