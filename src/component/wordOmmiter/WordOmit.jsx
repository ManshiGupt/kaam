import React, { useState } from "react";

const WordOmit = ({ a }) => {
  const [userWord, setUserWord] = useState(""); // State for user input
  const [userSent, setUserSent] = useState([]); // State for submitted sentences
  const [showFiltered, setShowFiltered] = useState(true); // State to toggle between filtered and unfiltered output

  // Function to handle input change
  const handleInputChange = (e) => {
    setUserWord(e.target.value);
  };

  // Function to handle submission
  const handleSubmit = () => {
    if (userWord.trim() !== "") {
      setUserSent((prev) => [...prev, userWord]); // Add the input to the submitted sentences
      setUserWord(""); // Clear the input field
    }
  };

  // Function to clear input and output
  const handleClear = () => {
    setUserWord("");
    setUserSent([]);
  };

  // Function to filter out words in `a` from the input
  const filterWords = (sentence) => {
    return sentence
      .split(" ")
      .filter((word) => !a.includes(word.toLowerCase()))
      .join(" ");
  };

  return (
    <div className="p-10 flex gap-10 flex-col">
      <h1>Word Omitter</h1>
      <div>
        <h2>Words to avoid: {a.join(", ")}</h2>
      </div>
      <div>
        <input
          type="text"
          value={userWord}
          onChange={handleInputChange}
          placeholder="Type a sentence..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <button onClick={() => setShowFiltered((prev) => !prev)}>
          {showFiltered ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        <h3>Output:</h3>
        {showFiltered ? (
          <div>
            {userSent.map((sentence, index) => (
              <div key={index} className="font-bold">
                {filterWords(sentence)}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {userSent.map((sentence, index) => (
              <div key={index}>{sentence}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WordOmit;