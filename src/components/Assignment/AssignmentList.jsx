import React from "react";
import "./Index.css";

const AssignmentList = ({
  questions,
  selectedQuestion,
  setSelectedQuestion,
  answers,
  setAnswers,
}) => {
  const currentQ = questions[selectedQuestion];

  const selectedOptions = answers[currentQ.id] || []; // array of selected options

  const handleCheckboxChange = (option) => {
    const alreadySelected = selectedOptions.includes(option);

    const updatedOptions = alreadySelected
      ? selectedOptions.filter((item) => item !== option) // remove
      : [...selectedOptions, option]; // add

    setAnswers({
      ...answers,
      [currentQ.id]: updatedOptions,
    });
  };

  const handleNext = () => {
    if (selectedQuestion < questions.length - 1) {
      setSelectedQuestion(selectedQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedQuestion > 0) {
      setSelectedQuestion(selectedQuestion - 1);
    }
  };

  return (
    <div className="cards">
      <h2>{questions[selectedQuestion].text}</h2>
      <ul>
        {questions[selectedQuestion].options.map((option, index) => (
          <li key={index} className="checkbox-item">
            <input
              type="checkbox"
              id={`option-${index}`}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />

            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button className="btn btn-prev" onClick={handlePrevious}>
          &lt; Previous
        </button>
        <button className="btn btn-next" onClick={handleNext}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default AssignmentList;
