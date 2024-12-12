import React, { useState } from "react";
import "./ListeningQuestion.css";

const ListeningQuestion = ({ question, audioSrc, options, onOptionChange, selectedOption,questionId }) => {
  return (
    <div className="listening-question-container">
      <p className="listening-question">{question}</p>
      <audio className="audio-player" controls>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="listening-options">
        {options.map((option, index) => (
          <label key={index} className="listening-option">
            <input
              type="radio"
              name={`listening-option-${questionId}`}
              value={index}
              checked={selectedOption === index}
              onChange={() => onOptionChange(index)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ListeningQuestion;
