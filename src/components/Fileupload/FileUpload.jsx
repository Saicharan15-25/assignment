import React from "react";
import "./Index.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FileUpload = () => {
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("Selected file:", file);
      navigate("/processAnalyzer");
    }
  };
  return (
    <div className="analyzer-container">
      <h1 className="title">Process Automation Analyzer</h1>
      <p className="subtitle">
        Upload your process documentation and get AI-powered automation
        recommendations with detailed architectures
      </p>

      <div className="steps">
        <span className="step active">
          <MdOutlineFileUpload className="up-loads" />
          Upload PDF
        </span>
        <span className="divider">—</span>
        <span className="step">⚙️ Analysis & Recommendations</span>
      </div>

      <div className="upload-box">
        <div>
          <div className="upload-icon">
            <FaFileAlt />
          </div>
          <h2 className="upload-title">Upload Process Documentation</h2>
          <p className="upload-desc">
            Upload a PDF containing your process description and steps for
            AI-powered automation analysis
          </p>

          <input
            accept=".pdf"
            type="file"
            className="hidden"
            placeholder="Choose PDF File"
            id="file-upload"
            onChange={handleFileChange}
          />
          <label className="custom-upload-btn" htmlFor="file-upload">
            Choose PDF File
          </label>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
