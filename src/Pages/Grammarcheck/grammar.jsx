import React, { useState } from "react";
import "./grammar.css";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import FileUploadButton from "../../Components/plagarism/FileButton";
import axios from "axios";
import para from "/Assets/para.webp"
import para2 from "/Assets/para2.webp"
import para3 from "/Assets/para3.webp"
import para5 from "/Assets/para5.webp"
const Plag = () => {
  const [text, setText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const maxLength = 1000;

  const handleTextChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  const handleScanPlagiarism = async () => {
    if (!text) {
      alert("Please enter text to check!");
      return;
    }
    try {
      const response = await axios.post("https://api-inference.huggingface.co/models/eugenesiow/bart-paraphrase", {
        inputs: text
      }, {
        headers: { Authorization: "Bearer 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" }
      });
      if (response.data) {
        setResults(response.data);
        console.log("Scanned for grammar:", response.data?.[0].generated_text);
        setShowResults(true);
      }
    } catch (error) {
      console.error("Failed to fetch results:", error);
      alert("Error fetching results. Please try again.");
    }
  };


  //  addhere function to fetch paraphrasing tool
  const handlePaste = (event) => {
    // Get the text from the clipboard
    const pasteText = event.clipboardData.getData("text");

    // Check if pasted text is less then 1000 characters
    if (pasteText.length > maxLength) {
      setText((prev) => `${prev}${pasteText.slice(0, maxLength - prev.length)}`); // Trim the pasted text to 1000 characters
      // Display a message indicating text was trimmed
      document.getElementById("text-area").value = `${document.getElementById("text-area").value} (Pasted text was trimmed to 1000 characters)`;
    } else {
      // Append the pasted text to the current text
      setText((prev) => prev + pasteText);
    }

    // Prevent the default paste operation to avoid duplication
    event.preventDefault();
  };

  const handleCopy = (event) => {
    // You can manipulate data here if needed
    // event.clipboardData.setData('text/plain', 'Specific text');
    event.preventDefault(); // Prevent the default copy operation
  };
console.log('results',results)


  return (
    <>
      <div className="">
        <h1 className="plag-title">Paraphrasing</h1>
        <h4 className="p-1">
        Paraphrasing checkers enhance originality, improve writing quality, and ensure content integrity
        </h4>
        <div className="flex justify-center items-center">
          <div
            className={`shadow-lg p-2 mb-5 border-2 rounded-lg flex sm:h-[580px] sm:mx-10 sm:my-10 sm:w-[600px] lg:w-[1000px] ${
              showResults ? "w-full" : "w-1/2"
            }`}
          >
            <div
              className={`${
                showResults ? "w-1/2" : "w-full"
              } flex flex-col space-y-4`}
            >
              <div className="relative">
                <textarea
                  id="text-area"
                  className="form-textarea mt-1 block w-full sm:h-[500px] p-2 rounded-md border-none resize-none"
                  placeholder="Enter text here..."
                  value={text}
                  onChange={handleTextChange}
                  onPaste={handlePaste}
                  onCopy={handleCopy}
                  style={{ background: "transparent" }}
                ></textarea>
                <div className="flex justify-between items-center">
                  <div className="flex px-2 py-1">
                    <button
                      className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 transition-colors"
                      onClick={handleScanPlagiarism}
                    >
                        Paraphrasing Tool
                    </button>
                    <div className="pl-2">
                      <FileUploadButton />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm">
                      {text.length}/{maxLength}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {showResults && results && (
              <div className="w-1/2 border-l-2 mx-2 ">
                    <h1 className="text-2xl w-full">  Transforming the written word without changing its heart
                    </h1>
               
                  <p className="text-xl mx-4" >{results?.[0].generated_text}</p>
              
              </div>
            )}
          </div>

          

        </div>
      </div>

      <div  className="flex bg-[#E8F2FC] justify-center items-center px-[50px] h-[500px] shadow-lg mt-4">
        <div className="flex items-start flex-col m-4 ">
          <h1 className="text-3xl font-bold">
          What's a paraphrasing tool?
          </h1> 
          <p className="w-3/4 mx-6 text-lg">
          This AI-powered paraphraser lets you rewrite text in your own words. Use it to  paraphrase articles, essays, and other pieces of text. You can also use it to rephrase sentences and find synonyms for individual words. And the best part? It’s all 100% free!
          </p>
        </div>
        <div>
          <img src={para2}/>
        </div>

      </div>

         <div  className="flex flex-row-reverse justify-center items-center px-[50px] mt-8">
        <div className="flex items-start flex-col p-14 w-2/3">
          <h1 className="text-3xl font-bold">
          What's paraphrasing?

          </h1> 
          <p className="mx-6 text-lg">
          Paraphrasing involves expressing someone else’s ideas or thoughts in your own words while maintaining the original meaning. Paraphrasing tools can help you quickly reword text by replacing certain words with synonyms or restructuring sentences. They can also make your text more concise, clear, and suitable for a specific audience. Paraphrasing is an essential skill in academic writing and professional communication. 
          </p>
        </div>
        <div className=" mx-10]">
          <img src={para}/>
        </div>

      </div>

      <div  className="flex justify-center items-center px-[50px] mt-8">
        <div className="flex items-start flex-col p-14 w-2/3">
          <h1 className="text-3xl font-bold">
          Why use this paraphrasing tool?

          </h1>

          <ul className="list-disc ml-10 pl-4">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              This tool is perfect for students, writers, and anyone who needs to rewrite text in their own words.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              It’s easy to use: just paste text, get a paraphrased version, and edit it further.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              The tool is completely free to use, and there are no ads or context_not_requireds to distract you from the text you need to focus on.
            </li>
          </ul>

        </div>
        <div className=" mx-10]">
          <img src={para3} width={500} />
        </div>

      </div>
       
       <div className="bg-[#E8F2FC] flex flex-col justify-center items-center">
       <div  className="flex flex-row-reverse justify-center items-center px-[50px] mt-8">
        <div className="flex items-start flex-col p-14 w-2/3">
          <h1 className="text-3xl font-bold">
          Avoid accidental plagiarism
          </h1>
         <p className="m-2 px-12 pb-2">Want to make sure your document is plagiarism-free? In addition to our paraphrasing tool, which will help you rephrase sentences, quotations, or paragraphs correctly. </p>

          <ul className="list-disc ml-10 pl-4">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              This tool is perfect for students, writers, and anyone who needs to rewrite text in their own words.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              It’s easy to use: just paste text, get a paraphrased version, and edit it further.
            </li>
            
          </ul>

        </div>
        <div className=" mx-10]">
          <img src={para5} width={500} />
        </div>

      </div>
       
       </div>

      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default Plag;

