import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Info from "../src/component/info"

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
      <Route  path="" element={<App/>} >
    </Route>
  <Route path="/info/:id"  element={<Info />} >
  </Route>
    </Routes>
</BrowserRouter>
</>
);