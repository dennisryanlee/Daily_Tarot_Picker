import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as Types from "../../Types";
import MainView from "./DailyDraw/DailyDrawView";
import Loginpage from "./Login_Register/Login";
import NewUser from "./Login_Register/NewUser";
import Diaries from "./Diary/Diaries";
import Navbar from "./Navbar";
import CardsView from "./CardsView/CardsView";
import CardsDetails from "./CardsView/CardsDetails";

const App = (props: Types.AppProps) => {
  // useEffect(() => {}, []);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<NewUser />} />
        <Route path="/dailydraw" element={<MainView />} />
        <Route path="/diary" element={<Diaries />} />
        <Route path="/cards" element={<CardsView />} />
        <Route path="/cards/:cardID" element={<CardsDetails />} />
      </Routes>
    </main>
  );
};

export default App;

/**
 * app holds all components
 * '/' and '/register' deal with logging users in and registering new users
 * both send users to '/landing'
 * '/landing' can send users to '/diary' and '/dailydraw'
 * '/dailydraw' is where users pick their card and create journal entries
 * after an entry is created, sends users to '/diary'
 * '/diary' allows users to see their previous entries
 */
