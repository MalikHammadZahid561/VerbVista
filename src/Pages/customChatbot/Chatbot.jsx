import React ,{useEffect} from 'react';
import ChatBot from 'react-simple-chatbot';
import cross from '/Assets/cross.svg';

const ChatbotComponent = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      id: 'welcome',
      message: 'Hi there! What would you like to learn more about today? Text Summarization, Plagiarism Checking, or Paraphrasing?',
      trigger: 'user-query',
    },
    {
      id: 'user-query',
      user: true,
      validator: (value) => {
        if (value.trim().length < 1) {
          return 'Please type something to continue...';
        }
        return true;
      },
      trigger: 'analyze-query',
    },
    {
      id: 'analyze-query',
      component: <DynamicResponse />,
      waitAction: true,
      replace: true,
      asMessage: true,
      // trigger: 'options-if-unrelated',
    },
    {
      id: 'options-if-unrelated',
      message: 'You seem interested in a different topic. Would you like to learn about Text Summarization, Plagiarism Checking, or Paraphrasing instead?',
      trigger: 'display-options',
    },
    {
      id: 'display-options',
      options: [
        { value: 'summarization', label: 'Text Summarization', trigger: 'text-summarization' },
        { value: 'plagiarism', label: 'Plagiarism Checking', trigger: 'plagiarism-check' },
        { value: 'paraphrasing', label: 'Paraphrasing', trigger: 'paraphrasing' },
        { value: 'none', label: 'None of these', trigger: 'end-conversation' },
      ],
    },
    {
      id: 'text-summarization',
      message: 'Our text summarization tool helps you condense the key information from a document into a shorter version. Would you like to try it now?',
      trigger: 'try-summarization',
    },
    {
      id: 'plagiarism-check',
      message: 'Our plagiarism checker helps you detect and identify potential plagiarism in your documents. Interested in learning more about how it works?',
      trigger: 'learn-plagiarism',
    },
    {
      id: 'paraphrasing',
      message: 'Our paraphrasing tool helps you rewrite text to achieve clearer, different expression. Use it to avoid plagiarism and enhance clarity!',
      trigger: 'try-paraphrasing',
    },
    {
      id: 'try-summarization',
      options: [
        { value: 'yes', label: 'Yes, show me how', trigger: 'show-summarization' },
        { value: 'no', label: 'Not right now', trigger: 'end-conversation' },
      ],
    },
    {
      id: 'learn-plagiarism',
      options: [
        { value: 'yes', label: 'Yes, tell me more', trigger: 'explain-plagiarism' },
        { value: 'no', label: 'No, thank you', trigger: 'end-conversation' },
      ],
    },
    {
      id: 'try-paraphrasing',
      options: [
        { value: 'yes', label: 'Yes, I want to try', trigger: 'use-paraphrasing' },
        { value: 'no', label: 'Maybe later', trigger: 'end-conversation' },
      ],
    },
    {
      id: 'show-summarization',
      message: 'Great! You can start by clicking "Summarize" in our menu. Just paste your text and hit "Summarize".',
      end: true,
    },
    {
      id: 'explain-plagiarism',
      message: 'Our plagiarism detection algorithm compares your text against a vast database to find similarities. It’s perfect for academic and professional use!',
      end: true,
    },
    {
      id: 'use-paraphrasing',
      message: 'Simply navigate to the paraphrasing section, enter your text, and see how it transforms!',
      end: true,
    },
    {
      id: 'end-conversation',
      message: 'If you need more help, feel free to ask. Have a great day!',
      end: true,
    },
  ];

  return (
    <div style={{
      position: 'fixed', bottom: 0, right: 40, zIndex: 1000, maxWidth: '300px', maxHeight: '400px',
    }}>
      <button onClick={handleClose} style={{
        position: 'absolute', top: 0, right: 0, zIndex: 1001, background:'none', border: 'none', 
      }}>
        <img src={cross} alt="Close" style={{ width: '20px', height: '20px' }} />
      </button>
      <ChatBot steps={steps} floating={false} width="300px" height="400px"
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
    </div>
  );
};

const DynamicResponse = ({ steps, triggerNextStep }) => {
  const userQuery = steps['user-query'].value.toLowerCase();

  useEffect(() => {
    if (userQuery.includes('summarization') || userQuery.includes('summarize')) {
      triggerNextStep({ trigger: 'text-summarization' });
    } else if (userQuery.includes('plagiarism')) {
      triggerNextStep({ trigger: 'plagiarism-check' });
    } else if (userQuery.includes('paraphrasing') || userQuery.includes('paraphrase')) {
      triggerNextStep({ trigger: 'paraphrasing' });
    } else {
      triggerNextStep({ trigger: 'options-if-unrelated' });
    }
  }, [userQuery, triggerNextStep]); // dependencies array ensures this only runs if userQuery or triggerNextStep changes

  return <div>Checking your request...</div>;
};

export default ChatbotComponent;