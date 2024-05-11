import React ,{useCallback, useEffect, } from 'react';
import ChatBot from 'react-simple-chatbot';
export default  ResponseView = ({ Steps, Float }) => {

  return (
      <ChatBot steps={Steps} floating={Float} width="300px" height="400px"
      style={{ position:'absolute', bottom: 100, right: 10, zIndex: 1000, maxWidth: '300px', maxHeight: '400px' }}
         contentStyle={{ borderRadius: '8px', boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2)' ,overflowY: 'scroll'}}
         bubbleStyle={{
            backgroundColor: '#f5f8fb',
            color: '#4a4a4a',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '20px',
          }}
          bubbleOptionStyle={{
            backgroundColor: '#2b8a3e',
            color: 'white',
            borderRadius: '20px',
          }}
      />
  );
};