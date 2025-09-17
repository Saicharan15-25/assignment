// AnyQuestion.jsx
import React from "react";
import "./anyquestion.css";
import { Nav } from "react-bootstrap";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const AnyQuestion = () => {
  const navigate = useNavigate();

  const handleYesClick = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  const handleNoClick = (event) => {
    event.preventDefault();
    navigate("/fileUpload");
  };

  return (
    <div className="question-container">
      <div className="question-card">
        <h1 className="question-title">Do you have a questionnaire?</h1>
        <div className="radio-group">
          <div className="radio-option" onClick={handleYesClick}>
            <h4 className="question-h4">Yes</h4>
          </div>

          <div className="radio-option" onClick={handleNoClick}>
            <h4 className="question-h4">No</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyQuestion;
