import React, { useState } from "react";
import "./grammar.css";
// import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import para from "/Assets/para.webp";
import para2 from "/Assets/para2.webp";
import para3 from "/Assets/para3.webp";
import para5 from "/Assets/para5.webp";
import { TailSpin } from 'react-loader-spinner';
// import Loader from 'react-loader-spinner';
const Plag = () => {
  const [text, setText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
 

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
  setLoading(true);
    const options = {
      method: "POST",
      url:
        "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "cc781e153dmsh888c8dfed84b98bp15dfd0jsn7bd0263a8aa3",
        "X-RapidAPI-Host":
          "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
      },
      data: {
        language: "en",
        strength: 3,
        text: text,
      },
    };
   
    try {
      const response = await axios.request(options);
      if (response.data) {
        let modifiedText = response.data.rewrite;
        let synonyms = response.data.synonyms;
        let wordsToReplace = Object.keys(synonyms).slice(0, Math.ceil(Object.keys(synonyms).length / 2));
  
        wordsToReplace.forEach(word => {
          const regex = new RegExp(`\\b${word}\\b`, 'gi');
          modifiedText = modifiedText.replace(regex, synonyms[word][0]);
        });
  
        setResults({ ...response.data, rewrite: modifiedText });
        setShowResults(true);
      }
    } catch (error) {
      console.error("Failed to fetch results:", error);
      alert("Error fetching results. Please try again.");
    }
   setLoading(false);
  };

  
  const handlePaste = (event) => {
    const pasteText = event.clipboardData.getData("text");

  
    if (pasteText.length > maxLength) {
      setText(prev => `${prev}${pasteText.slice(0, maxLength - prev.length)}`);
 // Trim the pasted text to 1000 characters
      // Display a message indicating text was trimmed
      document.getElementById("text-area").value = `${
        document.getElementById("text-area").value
      } (Pasted text was trimmed to 1000 characters)`;
    } else {
     
      setText((prev) => prev + pasteText);
    }

    event.preventDefault();
  };

  const handleCopy = (event) => {
  
   
    event.preventDefault(); 
  };


  return (
    <>
      <div className="">
        <h1 className="plag-title">Paraphrasing Tool</h1>
        <h4 className="p-1">
          Paraphrasing checkers enhance originality, improve writing quality,
          and ensure content integrity
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
              {loading   && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <TailSpin color="#00BFFF" height={80} width={80} />
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex px-2 py-1">
                    <button
                      className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 transition-colors"
                      onClick={handleScanPlagiarism}
                    >
                      Paraphrasing Tool
                    </button>
                   
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
                <h1 className="text-2xl w-full">
                  Transforming the written word without changing its heart
                </h1>
                <p className="text-sm mx-4">{results.rewrite}</p>
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text bg-slate-500 text-white hover:bg-slate-700 px-4 m-4 py-2"
                  >
                   Show more Synonyms
                  </button>
                  {isOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                      <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                          <div className="absolute top-0 right-0 pt-4 pr-4">
                            <button
                              type="button"
                              className="bg-white text-gray-500 rounded-md p-1.5 inline-flex items-center justify-center  hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="">Close</span>
                              {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                            </button>
                          </div>
                          <div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                Word Synonyms
                              </h3>
                              <div className="mt-2">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                  {Object.keys(results.synonyms).map((word) => (
                                    <li key={word} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                      <div className="w-0 flex-1 flex items-center">
                                        <span className="block truncate">{word}</span>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                          {results.synonyms[word].join(", ")}
                                        </span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex bg-[#E8F2FC] justify-center items-center px-[50px] h-[500px] shadow-lg mt-4">
        <div className="flex items-start flex-col m-4 ">
          <h1 className="text-3xl font-bold">What's a paraphrasing tool?</h1>
          <p className="w-3/4 mx-6 text-lg">
            This AI-powered paraphraser lets you rewrite text in your own words.
            Use it to paraphrase articles, essays, and other pieces of text. You
            can also use it to rephrase sentences and find synonyms for
            individual words. And the best part? It’s all 100% free!
          </p>
        </div>
        <div>
          <img src={para2} />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-center px-[50px] mt-8">
        <div className="flex items-start flex-col p-14 w-2/3">
          <h1 className="text-3xl font-bold">What's paraphrasing?</h1>
          <p className="mx-6 text-lg">
            Paraphrasing involves expressing someone else’s ideas or thoughts in
            your own words while maintaining the original meaning. Paraphrasing
            tools can help you quickly reword text by replacing certain words
            with synonyms or restructuring sentences. They can also make your
            text more concise, clear, and suitable for a specific audience.
            Paraphrasing is an essential skill in academic writing and
            professional communication.
          </p>
        </div>
        <div className=" mx-10]">
          <img src={para} />
        </div>
      </div>

      <div className="flex justify-center items-center px-[50px] mt-8">
        <div className="flex items-start flex-col p-14 w-2/3">
          <h1 className="text-3xl font-bold">
            Why use this paraphrasing tool?
          </h1>

          <ul className="list-disc ml-10 pl-4">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              This tool is perfect for students, writers, and anyone who needs
              to rewrite text in their own words.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              It’s easy to use: just paste text, get a paraphrased version, and
              edit it further.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-green-500">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              The tool is completely free to use, and there are no ads or
              context_not_requireds to distract you from the text you need to
              focus on.
            </li>
          </ul>
        </div>
        <div className=" mx-10]">
          <img src={para3} width={500} />
        </div>
      </div>

      <div className="bg-[#E8F2FC] flex flex-col justify-center items-center">
        <div className="flex flex-row-reverse justify-center items-center px-[50px] mt-8">
          <div className="flex items-start flex-col p-14 w-2/3">
            <h1 className="text-3xl font-bold">Avoid accidental plagiarism</h1>
            <p className="m-2 px-12 pb-2">
              Want to make sure your document is plagiarism-free? In addition to
              our paraphrasing tool, which will help you rephrase sentences,
              quotations, or paragraphs correctly.{" "}
            </p>

            <ul className="list-disc ml-10 pl-4">
              <li className="flex items-start">
                <span className="mr-2 font-bold text-green-500">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                This tool is perfect for students, writers, and anyone who needs
                to rewrite text in their own words.
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold text-green-500">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                It’s easy to use: just paste text, get a paraphrased version,
                and edit it further.
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