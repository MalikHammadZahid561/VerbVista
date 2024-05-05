import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Summarizers from "./Pages/Summarizer/Summarizers";
import Plag from "./Pages/Plagcheck/Plag";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import { MantineProvider } from '@mantine/core';
// import GrammarChecker from './Pages/Grammarcheck/Grammar';
import GrammarChecker from './Pages/Grammarcheck/grammar';
import ChatbotComponent from './Pages/customChatbot/Chatbot';
import ChatToggleButton from './Pages/customChatbot/ChatToggle';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = () => setChatOpen(!chatOpen);
  const location = useLocation();
  const showHeader = location.pathname !== "/" && location.pathname !== "/register";

  return (
    <MantineProvider>
      {showHeader && <Header />}
      <ChatbotComponent isOpen={chatOpen} handleClose={() => setChatOpen(false)} />
      <ChatToggleButton handleClick={toggleChat} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/plag" element={<Plag />} />
        <Route path="/summarizers" element={<Summarizers />} />
        <Route path="/grammar" element={<GrammarChecker />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;