import React, { useState } from "react";
import "./Quiz.css";
import ReadingQuestion from "../Question/ReadingQuestion/ReadingQuestion";
import ListeningQuestion from "../Question/ListeningQuestion/ListeningQuestion";
import WritingQuestion from "../Question/WritingQuestion/WritingQuestion";
import SpeakingQuestion from "../Question/SpeakingQuestion/SpeakingQuestion";

const Quiz = () => {

  const readingQuestions = [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The importance of reading",
        "The benefits of exercise",
        "How to cook pasta",
        "Tips for saving money",
      ],
    },
    {
      question: "Which of the following is a synonym for 'happy'?",
      options: ["Sad", "Joyful", "Angry", "Tired"],
    }
  ];

  const listeningQuestions = [
    {
      question: "Listen to the audio and choose the main idea:",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      options: [
        "Option A: Relaxing music",
        "Option B: Busy street sounds",
        "Option C: Conversation between two people",
        "Option D: Background noise in a cafe",
      ],
    },
    {
      question: "What type of audio is this?",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      options: [
        "Option A: A podcast",
        "Option B: A music track",
        "Option C: A lecture",
        "Option D: A news broadcast",
      ],
    },
    {
      question: "Identify the mood of the audio:",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      options: [
        "Option A: Joyful",
        "Option B: Sad",
        "Option C: Tense",
        "Option D: Relaxing",
      ],
    },
  ];

  const writingQuestions = [
    {
      question: "Describe the scene shown in the image below:",
      imageSrc: "https://via.placeholder.com/600x300", // Replace with an actual image URL
    },
    {
      question: "Write about your favorite childhood memory:",
      imageSrc: "", // No image for this question
    },
  ];

  const speakingQuestions = [
    "Describe your favorite holiday destination.",
    "Talk about an important event in your life.",
    "Explain the advantages of learning a second language.",
  ];

  
  // This Hook is for reading anh listening question
  const [selectedAnswers, setSelectedAnswers] = useState(
    // Array(readingQuestions.length).fill(null)
    Array(listeningQuestions.length).fill(null)
  );

  // This Hook is for writing question
  const [answers, setAnswers] = useState(Array(writingQuestions.length).fill(""));

  // This Hook is for Speaking question
  const [uploadedFiles, setUploadedFiles] = useState(Array(speakingQuestions.length).fill(null));

  const handleOptionChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerChange = (index, newAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = newAnswer;
    setAnswers(updatedAnswers);
  };

  const handleFileUpload = (index, file) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[index] = file;
    setUploadedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    console.log("Selected Answers: ", selectedAnswers);
    alert("Quiz submitted! Check console for answers.");
  };

  const score = null;

  return (
    <div className="quiz-page-container">
      <div className="quiz-header">
        <h1 className="quiz-title">Reading Quiz</h1>
        <div className="quiz-score">{score ?? '-- '}/10</div>
      </div>
      {/* {readingQuestions.map((item, index) => (
        <div key={index} className="quiz-question-block">
          <ReadingQuestion
            question={item.question}
            options={item.options}
            selectedOption={selectedAnswers[index]}
            onOptionChange={(option) => handleOptionChange(index, option)}
            questionId={index} 
          />
        </div>
      ))} */}
      {/* {listeningQuestions.map((question, index) => (
        <div key={index} className="quiz-question-block">
          <ListeningQuestion
            question={question.question}
            audioSrc={question.audioSrc}
            options={question.options}
            selectedOption={selectedAnswers[index]}
            onOptionChange={(selectedOption) => handleOptionChange(index, selectedOption)}
            questionId={index}
          />
        </div>
      ))} */}
      {/* {writingQuestions.map((q, index) => (
        <div key={index} className="quiz-question-block">
          <WritingQuestion
            question={q.question}
            imageSrc={q.imageSrc}
            answer={answers[index]}
            onAnswerChange={(newAnswer) => handleAnswerChange(index, newAnswer)}
          />
        </div>
      ))} */}
      {speakingQuestions.map((q, index) => (
        <div key={index} className="quiz-question-block">
          <SpeakingQuestion
            question={q}
            onFileUpload={(file) => handleFileUpload(index, file)}
            questionId={index}
          />
        </div>
      ))}
      <button className="quiz-submit-button" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;
