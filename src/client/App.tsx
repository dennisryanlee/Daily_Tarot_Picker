import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as Types from "../../Types";
import MainView from "./Components/MainView";
import Loginpage from "./Login";
import NewUser from "./NewUser";

const App = (props: Types.AppProps) => {
  // useEffect(() => {}, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<NewUser />} />
        <Route path="/dailydraw" element={<MainView />} />
      </Routes>
    </main>
  );
};

export default App;
