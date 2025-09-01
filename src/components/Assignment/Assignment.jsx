import "./Index.css";

import React, { useState } from "react";
import AssignmentList from "./AssignmentList";
import Header from "../Header/Header";

const questions = [
  {
    id: 1,
    text: "What are your primary business objectives for implementing RAG?",
    options: [
      "Customer Support & Service Enhancement",
      "Internal Knowledge Management",
      "Content Generation & Marketing",
      "Research & Data Analysis",
      "Compliance & Risk Management",
    ],
    answer: null,
  },
  {
    id: 2,
    text: "What is your expected data volume range?",
    options: [
      "Small Scale (< 1TB)",
      "Medium Scale (1-10TB)",
      "Large Scale (10-100TB)",
      "Enterprise Scale (> 100TB)",
    ],
    answer: null,
  },
  {
    id: 3,
    text: "Which cloud infrastructure platforms do you prefer?",
    options: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Multi-cloud Strategy",
      "On-Premise Infrastructure",
      "Hybrid Cloud",
    ],
    answer: null,
  },
  {
    id: 4,
    text: "What is your team's AI/ML expertise level?",
    options: [
      "Beginner (No prior ML experience)",
      "Intermediate (Some ML knowledge)",
      "Advanced (Experienced ML team)",
      "Expert (ML specialists and researchers)",
      "Mixed expertise across teams",
    ],
    answer: null,
  },
  {
    id: 5,
    text: "What is your budget range for this implementation?",
    options: [
      "Startup Budget ($10K - $50K)",
      "SME Budget ($50K - $200K)",
      "Enterprise Budget ($200K - $1M)",
      "Large Enterprise (> $1M)",
    ],
    answer: null,
  },
  {
    id: 6,
    text: "What are your required response time expectations?",
    options: [
      "Real-time (< 500ms)",
      "Fast Response (< 2 seconds)",
      "Moderate (< 10 seconds)",
      "Batch Processing Acceptable",
      "Mixed Requirements",
    ],
    answer: null,
  },
  {
    id: 7,
    text: "What types of data sources will you primarily use?",
    options: [
      "Structured Data (Databases, APIs)",
      "Unstructured Text (Documents, PDFs)",
      "Multimedia (Images, Audio, Video)",
      "Mixed Data Types",
      "Real-time Streaming Data",
      "Legacy System Integration",
    ],
    answer: null,
  },
  {
    id: 8,
    text: "What are your security and compliance requirements?",
    options: [
      "Basic Security Measures",
      "Enterprise-grade Security",
      "Highly Regulated (HIPAA, SOX, etc.)",
      "Government/Military Grade",
      "GDPR Compliance Required",
      "Custom Security Framework",
    ],
    answer: null,
  },
  {
    id: 9,
    text: "What is your preferred deployment timeline?",
    options: [
      "Immediate Deployment (< 1 month)",
      "Quick Deployment (1-3 months)",
      "Standard Timeline (3-6 months)",
      "Extended Timeline (> 6 months)",
      "MVP First, Then Scale",
    ],
    answer: null,
  },
  {
    id: 10,
    text: "What level of customization do you require?",
    options: [
      "Low (Out-of-box Solutions)",
      "Medium (Some Customization)",
      "High (Significant Customization)",
      "Full Custom Development",
      "Modular Approach",
      "White-label Solutions",
    ],
    answer: null,
  },
];

const Assignment = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const totalQuestions = questions.length;

  const progressPercentage = ((selectedQuestion + 1) / totalQuestions) * 100;

  return (
    <>
      {/* <Header /> */}
      <div className="homepagescontainer">
        <div className="assignment-container">
          <div className="progress-card">
            <h2 className="progress-title">Assessment in Progress</h2>
            <p className="progress-description">
              Building your per sonalized RAG architecture recommendations
            </p>

            <div className="progress-section">
              <div className="progress-bar-background">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="progress-footer">
                <span>
                  Question {selectedQuestion + 1} of {totalQuestions}
                </span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
            </div>
          </div>
          {
            <AssignmentList
              questions={questions}
              answers={answers}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
              setAnswers={setAnswers}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Assignment;
