import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as Types from "../../Types";
import MainView from "./DailyDraw/DailyDrawView";
import Loginpage from "./Login_Register/Login";
import NewUser from "./Login_Register/NewUser";
import Landing from "./Landing";
import Diaries from "./Diary/Diaries";

const App = (props: Types.AppProps) => {
  // useEffect(() => {}, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<NewUser />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/dailydraw" element={<MainView />} />
        <Route path="/diary" element={<Diaries />} />
      </Routes>
    </main>
  );
};

export default App;
