// MainPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Summarizer.css';
import upload from "../../assets/cloud-computing.png";
import { HfInference } from '@huggingface/inference'

const Home = ({head, button}) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const hf = new HfInference('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')

  const handleSummarize = async() => {
    // Implement summarization logic
    console.log('Summarizing...');
    try {
      // await hf.loadModel('../../../model/bart-large-cnn')
      const response = await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: inputText,
        parameters: {
          max_length: 100
        }
      });
  
      setOutputText(response.summary_text); // This will print the generated summary
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className='main'>
      <h1 className="sumtitle" >{head}</h1>
      <div className="input-container">
        <textarea 
          placeholder="Enter text to summarize"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <textarea
          placeholder="Summary output"
          value={outputText}
          readOnly
        />
      </div>
        {/* <div className="upload-container">
        <label className="file-upload" htmlFor="fileUpload">
            <img className='upload' src={upload} alt="" />
            <input style={{display:'none'}}
              type="file"
              id="fileUpload"
              accept=".txt, .pdf, .docx"
              onChange={handleFileUpload}
            />
            <span></span>
          </label>
            <input className='url_input'
              type="text"
              placeholder="Enter URL to summarize"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          
        </div> */}
      <div className='div_button' >
      <button className="rounded-button" onClick={handleSummarize}>
        {button}
      </button>
      </div>
    </div>
  );

    
};

export default Home;
