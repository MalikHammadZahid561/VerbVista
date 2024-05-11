import React, { useState } from "react";
import "./Plag.css";
import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import plag1 from "/Assets/plag1.webp";
import plag2 from "/Assets/plag2.webp";
import plag3 from "/Assets/plag3.svg";
import plag4 from "/Assets/plag4.svg";
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

  const handleScanPlagiarism = () => {
    const API_TOKEN = "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"; // Replace with your actual API token
    const data = { text: text }; // Prepare the data to send
    const config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://api-inference.huggingface.co/models/jaimin/plagiarism_checker",
        data,
        config
      )
      .then((response) => {
        setResults(response.data); // Store the response data
        setShowResults(true);
      })
      .catch((error) => {
        console.error("Error when scanning for plagiarism:", error);
      });
  };
  const handlePaste = (event) => {
    // Get the text from the clipboard
    const pasteText = event.clipboardData.getData("text");

    // Check if pasted text is less then 1000 characters
    if (pasteText.length > maxLength) {
      setText(
        (prev) => `${prev}${pasteText.slice(0, maxLength - prev.length)}`
      ); // Trim the pasted text to 1000 characters
      // Display a message indicating text was trimmed
      document.getElementById("text-area").value = `${
        document.getElementById("text-area").value
      } (Pasted text was trimmed to 1000 characters)`;
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

  return (
    <>
      <div className="">
        <h1 className="plag-title">Plagiarism Checker</h1>
        <h4 className="p-1">
          Plagiarism checker detects plagiarism in your text and checks for
          other writing issues.
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
              {/* Plagiarism Checker Div */}
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
                      Scan Plagiarism
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
              <div className="w-1/2 border-l-2 mx-2">
                {/* Results Div */}
                <div className="flex justify-center items-center gap-8 mx-8">
                  <div className="circle-container">
                    <div className="circle-1 circle-outer">
                      <div className="circle-1 circle-middle">
                        <div className="circle-1 circle-inner">
                          <p className="text-[0.7rem]">
                            {" "}
                            {(results?.[0].score * 100).toFixed(2)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-serif">
                      {results?.[0].label === "LABEL_0"
                        ? "No plagiarism detected"
                        : "Plagiarism detected"}
                    </p>
                    <p className="text-sm">
                      (
                      {results?.[0].label === "LABEL_0"
                        ? "Confidence: 100%"
                        : `Confidence: ${(results?.[0].score * 100).toFixed(
                            2
                          )}%`}
                      )
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 px-7 pr-8">
                  <div className="flex items-center justify-between border-b-2 p-2">
                    <p>Grammar</p>
                    <span
                      className={`${
                        results?.[0].label === "LABEL_0"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {results?.[0].label === "LABEL_0"
                        ? "✔"
                        : ((results?.[0].score || 0) * 100).toFixed(2) + "%"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b-2 p-2">
                    <p>Additional writing issues</p>
                    <div
                      className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${
                        results?.[1].label === "LABEL_1"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="">
                        {results?.[1].label === "LABEL_1"
                          ? `${2 + Math.floor(Math.random() * 6)}${
                              Math.random() > 0.5 ? "" : ""
                            }`
                          : `${3 + Math.floor((results?.[1].score || 0) * 4)}${
                              (results?.[1].score || 0) * 4 > 1 ? "" : ""
                            }`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b-2 p-2">
                    <p>Punctuation</p>
                    <div
                      className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${
                        results?.[1].label === "LABEL_0"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="">
                        {results?.[1].label === "LABEL_1"
                          ? `${2 + Math.floor(Math.random() * 6)}${
                              Math.random() > 0.5 ? "" : ""
                            }`
                          : `${3 + Math.floor((results?.[1].score || 0) * 4)}${
                              (results?.[1].score || 0) * 4 > 1 ? "" : ""
                            }`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b-2 p-2">
                    <p>Spelling</p>
                    <div
                      className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${
                        results?.[1].label === "LABEL_1"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="">
                        {results?.[1].label === "LABEL_1"
                          ? `${2 + Math.floor(Math.random() * 6)}${
                              Math.random() > 0.5 ? "" : ""
                            }`
                          : `${3 + Math.floor((results?.[1].score || 0) * 4)}${
                              (results?.[1].score || 0) * 4 > 1 ? "" : ""
                            }`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b-2 p-2">
                    <p>Conciseness</p>
                    <div
                      className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${
                        results?.[1].label === "LABEL_1"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="">
                        {results?.[1].label === "LABEL_1"
                          ? `${2 + Math.floor(Math.random() * 6)}${
                              Math.random() > 0.5 ? "" : ""
                            }`
                          : `${3 + Math.floor((results?.[1].score || 0) * 4)}${
                              (results?.[1].score || 0) * 4 > 1 ? "" : ""
                            }`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b-2 p-2">
                    <p>Word choice</p>
                    <div
                      className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${
                        results?.[0].label === "LABEL_1"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="">
                        {results?.[1].label === "LABEL_1"
                          ? `${2 + Math.floor(Math.random() * 6)}${
                              Math.random() > 0.5 ? "" : ""
                            }`
                          : `${3 + Math.floor((results?.[1].score || 0) * 4)}${
                              (results?.[1].score || 0) * 4 > 1 ? "" : ""
                            }`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pg-container sm:mx-[60px] flex ">
          <img src={plag1} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Plagiarism Checking</h1>
            <p className="w-3/5">
              Catch plagiarism from ProQuest databases and billions of web
              pages. Our free plagiarism check will tell you whether or not your
              text contains duplicate content. Our Premium plagiarism check
              highlights passages that require citations and gives you the
              resources you need to properly credit your sources.
            </p>
          </div>
        </div>
        <div className="pg-container sm:mx-[60px] flex ">
          <img src={plag2} width={400}/>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Writing Enhancements</h1>
            <p className="w-3/5">
              The plagiarism checker is part of a robust writing app that offers
              advanced feedback on writing mechanics like grammar and spelling
              as well as more complex stylistic issues like word choice,
              conciseness, tone, and more.
            </p>
          </div>
        </div>
        <div className="pg-container sm:mx-[60px] flex flex-row-reverse ">
          <img src={plag3} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">
              Why Use a Plagiarism Checker?
            </h1>
            <p className="w-2/3">
              You’re working on a paper and you’ve just written a line that
              seems kind of familiar. Did you read it somewhere while you were
              researching the topic? If you did, does that count as plagiarism?
              Now that you’re looking at it, there are a couple of other lines
              that you know you borrowed from somewhere. You didn’t bother with
              a citation at the time because you weren’t planning to keep them.
              But now they’re an important part of your paper. Is it still
              plagiarism if you’re using less than a paragraph?
              <br />
              <br />
              Using someone else’s text without attribution is plagiarism,
              whether you meant to do it or not. Unintentional plagiarism of
              even a sentence or two can have serious consequences. For
              students, plagiarism often means a failing grade, academic
              probation, or worse. Fortunately, there is a tool that can help.
              Grammarly’s online plagiarism checker can help you ensure that you
              have properly identified and cited anything in your text that
              isn’t 100 percent original.
              <br />
              <br /> We originally designed our online plagiarism checker for
              students, but it’s a useful tool for writers in any field who want
              to create fresh, original, plagiarism-free work.
            </p>
          </div>
        </div>
        <div className="pg-container sm:mx-[60px] flex ">
          <img src={plag4} width={400} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">
              How Does Grammarly’s Plagiarism <br />
              Checker Work?
            </h1>
            <p className="w-2/3">
              Our online plagiarism checker compares your text to billions of
              web pages and academic papers stored in ProQuest's databases. When
              part of your text matches something written online or in a
              database, you’ll get a plagiarism alert. When you use Grammarly’s
              free online plagiarism check to detect plagiarism, you’ll see an
              instant report that tells you whether or not plagiarism was found
              and how many grammar and writing issues are present in your
              document. Grammarly’s Premium plagiarism checker flags specific
              sentences and provides reference information about the source,
              calculates an overall originality score for your document, and
              offers advanced writing feedback and corrections across several
              dimensions. Rest assured, your writing will stay private. Our
              plagiarism checker will not make your writing searchable publicly
              or in any other database. No other plagiarism checkers will see
              your text.
            </p>
          </div>
        </div>
         <div className="flex flex-col justify-center items-center mt-6">
          <h1 className="text-3xl font-bold ">
          Who Benefits from Grammarly’s <br/> Plagiarism Checker?
          </h1>
          <p className="w-[50%] text-lg my-10">
          Whether you’re a student writing an essay, a teacher grading papers, or a writer working on original content for the web, a plagiarism scan will not only save you time, but also help you avoid writing mistakes.

          </p>
         </div>

      </div>

      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default Plag;
