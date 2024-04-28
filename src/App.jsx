import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Summarizers from "./Pages/Summarizer/Summarizers"
import Plag from "./Pages/Plagcheck/Plag"
// import Grammar from "./Pages/Grammarcheck/Grammar"
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import { MantineProvider } from '@mantine/core';
import GrammarChecker from './Pages/Grammarcheck/grammar';
import ChatbotComponent from './Pages/customChatbot/Chatbot';
import ChatToggleButton from './Pages/customChatbot/ChatToggle';

function App() {
  const [chatOpen,setChatOpen]=useState(false)
  const toggleChat = () => setChatOpen(!chatOpen);
 return (
  <MantineProvider>
    <Header/>
    <ChatbotComponent isOpen={chatOpen} handleClose={() => setChatOpen(false)} />
    <ChatToggleButton handleClick={toggleChat} />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/plag" element={<Plag />} />
      <Route exact path="/summarizers" element={<Summarizers />} />
      <Route exact path="/grammar" element={<GrammarChecker />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </MantineProvider>
);}

export default App;