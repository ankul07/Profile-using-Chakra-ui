import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/profile/Profile";
import { Routes, Route } from "react-router-dom";
import Setting from "./components/settings/Setting";

const App = () => {
  return (
    <>
      <Header />
      {/* <CartForm /> */}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
};

export default App;
