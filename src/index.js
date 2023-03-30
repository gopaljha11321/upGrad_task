import React from "react";
import ReactDOM from "react-dom/client";
import User from "./pages/Login.jsx"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import{lazy,Suspense} from "react"
const App=lazy(()=>import("./pages/App"))
const Info=lazy(()=>import("../src/component/Info"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/home" element={<App />} key={1} />
        <Route path="/home/info/:id" element={<Info />} key={2} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/user" element={<User/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);
