import React from "react";
import "./Index.css";
import { RiRobot2Fill } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";

function ProcessAnalyzer() {
  return (
    <div className="analyzer-containers">
      {/* <h1 className="title">Process Automation Analyzer</h1>
      <p className="subtitle">
        Upload your process documentation and get AI-powered automation
        recommendations with detailed architectures
      </p>

      <div className="upload-section">
        <button className="upload-btn">⬆ Upload PDF</button>
        <button className="link-btn">📊 Analysis & Recommendations</button>
      </div> */}

      <div className="cards">
        <h2 className="cards-title">
          ⚡ Process Analysis Summary - BUSINESS PROCESS DOCUMENTATION
        </h2>

        <div className="badge-container">
          <div className="item">
            <h1 className="badge">High</h1>
            <p className="para">Complexity Level</p>
          </div>
          <div className="item">
            <h1 className="badge">3-5 business days Manual touchpoints</h1>
            <p className="para">Current Timeline</p>
          </div>
        </div>

        <hr />

        <h3 className="section-title">Process Characteristics:</h3>
        <div className="tags">
          <span className="tag tag-blue">📄 Document Heavy</span>
          <span className="tag tag-green">✅ Approval Workflow</span>
          <span className="tag tag-purple">📊 Data Intensive</span>
          <span className="tag tag-red">🔥 High Complexity</span>
          <span className="tag tag-gray">👤 Manual Steps</span>
        </div>

        <hr />

        <h3 className="section-title">Extracted Process Steps:</h3>
        <div className="process-steps">
          <div className="step">
            <h4>1. Process Initiation</h4>
            <ul>
              <li>Receive request or trigger event</li>
              <li>Validate trigger parameters and requirements</li>
              <li>Check system availability and resources</li>
              <p className="li.para">+ 1 main task</p>
            </ul>
          </div>

          <div className="step">
            <h4>2. Data Processing</h4>
            <ul>
              <li>Extract and transform input data</li>
              <li>Validate data against business rules</li>
              <li>Perform calculations or analysis</li>
              <p className="li.para">+ 1 main task</p>
            </ul>
          </div>

          <div className="step">
            <h4>3. Review and Approval</h4>
            <ul>
              <li>Route to appropriate stakeholders</li>
              <li>Perform quality checks and validations</li>
              <li>Handle exceptions and new cases</li>
              <p className="li.para">+ 1 main task</p>
            </ul>
          </div>

          <div className="step">
            <h4>4. Output Generation</h4>
            <ul>
              <li>Generate reports or deliverables</li>
              <li>Send notifications to relevant parties</li>
              <li>Update process status and completion</li>
              <p className="li.para">+ 1 main task</p>
            </ul>
          </div>
        </div>

        <hr />

        {/* Systems to be Integrated: */}

        <h3 className="section-title">Systems to be Integrated:</h3>
        <div className="tags">
          <span className="tag tag-blue">Core Business System</span>
          <span className="tag tag-gray">Database</span>
          <span className="tag tag-purple">Email Platform</span>
          <span className="tag tag-green">Document Management</span>
          <span className="tag tag-blue">Data validation</span>
        </div>
      </div>

      <div className="anime-logo">
        <RiRobot2Fill className="robot-icon" />
        <h1>Automation Architecture Recommendations</h1>
      </div>

      <div className="recommend-container">
        <h2 className="recommend-title">
          Automation Recommendations - Ranked by Best Match
        </h2>

        {/* Top Ranked Cards */}
        <div className="ranked-cards">
          <div className="rank-card active">
            <div className="rank-badge">#1 🏆 Best Match</div>
            <h3>Agentic AI</h3>
            <p>6-9 months</p>
            <span className="match-score">98%</span>
          </div>

          <div className="rank-card">
            <div className="rank-badge secondary">#2</div>
            <h3>RPA Implementation</h3>
            <p>4-6 months</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span className="match-score">90%</span>
          </div>

          <div className="rank-card">
            <div className="rank-badge danger">#3</div>
            <h3>Core AI/ML</h3>
            <p>10-15 months</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span className="match-score">90%</span>
          </div>
        </div>

        {/* Detailed Recommendations */}
        <div className="recommend-details">
          <div className="detail-card highlighted">
            <h4>Agentic Solution</h4>
            <p>
              <strong>Match:</strong> 98% | <strong>Timeline:</strong> 6-9
              months
            </p>
            <p>
              <strong>Key Benefit:</strong> Adaptive reasoning and learning
            </p>
            <div className="detail-rank">#1</div>
          </div>

          <div className="detail-card">
            <h4>RPA Solution</h4>
            <p>
              <strong>Match:</strong> 90% | <strong>Timeline:</strong> 4-6
              months
            </p>
            <p>
              <strong>Key Benefit:</strong> Quick implementation and ROI
            </p>
            <div className="detail-rank secondary">#2</div>
          </div>

          <div className="detail-card">
            <h4>Core Solution</h4>
            <p>
              <strong>Match:</strong> 90% | <strong>Timeline:</strong> 10-15
              months
            </p>
            <p>
              <strong>Key Benefit:</strong> Custom solutions for specific needs
            </p>
            <div className="detail-rank danger">#3</div>
          </div>
        </div>
      </div>

      {/*Agentic AI Implementation*/}

      <div className="ai-blue-container">
        <div className="inside-header">
          <h2>Agentic AI Implementation</h2>
          <span className="badge">🏆 Recommended Solution</span>
          <div className="match-info">
            <span className="match-score">98% Match</span>
            <span className="timeline">6-9 months</span>
          </div>
        </div>

        <p className="subtitle">Complete Solution Design Architecture:</p>

        {/* AI Agent Layer */}
        <div className="color-cards-blue">
          <h3 className="agent-title">
            Agentic AI Solution Design Architecture
          </h3>
          <div className="Ai-agent-layers">
            <h4>AI Agent Layer</h4>
            <div className="agent-items border-cards">
              <h3>Orchestrator Agent</h3>
              <ul>
                <li>Process coordination</li>
                <li>Task decomposition</li>
                <li>Decision routing</li>
              </ul>
            </div>

            <div className="agent-items border-cards">
              <h3>Process Initiation Agent</h3>
              <ul>
                <li>Decision making</li>
                <li>Context awareness</li>
              </ul>
            </div>

            <div className="agent-items border-cards">
              <h3>Data Processing Agent</h3>
              <ul>
                <li>Task execution</li>
                <li>Context awareness</li>
              </ul>
            </div>
          </div>

          {/* LLM & Reasoning */}
          <div className="section-blue">
            <h4>LLM & Reasoning</h4>

            <div className="agent-items border-cards">
              <h3>Multi-Modal LLM</h3>
              <ul>
                <li>GPT-4 / Claude 3.5</li>
                <li>Function calling</li>
                <li>Chain-of-thought reasoning</li>
              </ul>
            </div>

            <div className="agent-items border-cards">
              <h3>Memory Systemt</h3>
              <ul>
                <li>Vector database (Pinecone)</li>
                <li>Conversation history</li>
                <li> Process context</li>
              </ul>
            </div>

            <div className="agent-items border-cards">
              <h3>Planning Engine</h3>
              <ul>
                <li> LangChain/LangGraph</li>
                <li>Multi-step workflows</li>
                <li> Error recovery</li>
              </ul>
            </div>
          </div>

          {/* Tool Integration */}

          <div className="color-cards-blue">
            <h4>Tool Integration</h4>

            <div className="agent-items border-cards">
              <h3>API Gateway</h3>
              <ul>
                <li> RESTful interfaces</li>
                <li>Authentication & security</li>
                <li> Rate limiting</li>
              </ul>
            </div>

            <div className="agent-items border-cards">
              <h3>Document Processing</h3>
              <ul>
                <li> Multi-modal understanding</li>
                <li>OCR & extraction</li>
                <li> Content analysis</li>
              </ul>
            </div>

            <div className="agent-items border-cards">
              <h3>Human-in-Loop</h3>
              <ul>
                <li>Approval workflows</li>
                <li>Exception escalation</li>
                <li> Feedback collection</li>
              </ul>
            </div>
          </div>

          <hr />

          {/* Agentic AI Solution Flow */}

          <h2 className="Ag-title">Agentic AI Solution Flow</h2>

          <div className="border-cards-item">
            <div className="Agent-items-flow">
              <h3 className="Agent-items-flow-title">Request Processing</h3>
              <ol className="Agent-items-flow-ol">
                <li className="Agent-list-order">
                  Natural language log processing
                </li>
                <li className="Agent-list-order">
                  Context classification & extraction
                </li>
                <li className="Agent-list-order">
                  Intent detection & memory activation
                </li>
                <li className="Agent-list-order">Multi-step plan generation</li>
              </ol>
            </div>
          </div>

          <div className="border-cards-item">
            <div className="Agent-items-flow">
              <h3 className="Agent-items-flow-title">Execution & Learning</h3>
              <ol className="Agent-items-flow-ol">
                <li className="Agent-list-order">
                  Dynamic tool selection & execution
                </li>
                <li className="Agent-list-order">
                  Real-time monitoring & adaptation
                </li>
                <li className="Agent-list-order">
                  Result validation & quality checks
                </li>
                <li className="Agent-list-order">
                  {" "}
                  Continuous learning from interactions
                </li>
              </ol>
            </div>
          </div>

          {/* System Integrations */}

          <div className="border-cards-system">
            <h2 className="system-title">System Integrations</h2>
            <div className="system-items">
              <div className="system-item">
                <h4>Core Business System</h4>
              </div>
              <div className="system-item">
                <h4>Database</h4>
              </div>
              <div className="system-item">
                <h4>Email Platform</h4>
              </div>
              <div className="system-item">
                <h4>Document Management Current processing time</h4>
              </div>
              <div className="system-item">
                <h4>3-5 business days Manual touchpoints</h4>
              </div>
              <div className="system-item">
                <h4>Data validation</h4>
              </div>
            </div>
          </div>
        </div>

        {/* \Recommended Tools */}

        <div className="content-wrapper">
          <h3 className="recommended-title">Recommended Tools:</h3>
          <ul>
            <li>LangChain</li>
            <li>OpenAI GPT-4V</li>
            <li>Microsoft Copilot Studio</li>
            <li>Anthropic Claude</li>
          </ul>

          <h3 className="recommended-title">Key Benefits:</h3>
          <ul>
            <li>Adaptive reasoning and learning</li>
            <li>Natural language interface</li>
            <li>Advanced document understanding</li>
            <li>Smart workflow optimization</li>
          </ul>
        </div>

        {/* Technical Components: */}

        <h3 className="recommended-title">Technical Components:</h3>
        <div className="Technical-components">
          <ul>
            <li> AI Agent Orchestrator</li>
            <li> Multi-Modal LLM (GPT-4V, Claude)</li>
            <li>Tool Integration Layer (APIs, Databases)</li>
            <li> Memory & Context Management</li>
            <li>Human-in-the-Loop Workflow</li>
            <li>Reasoning & Decision Engine</li>
            <li>Real-time Monitoring & Feedback</li>
            <li> Performance Analytics</li>
          </ul>
        </div>

        <hr />

        {/* Limitations to Consider: */}

        <div className="content-wrapper">
          <h3 className="recommended-title">Limitations to Consider:</h3>
          <ul>
            <li>Higher complexity and cost</li>
            <li>Requires AI expertise</li>
            <li>Potential hallucinations</li>
            <li>Model dependency risks</li>
          </ul>
        </div>
      </div>

      {/* Customize Recommendations */}

      <div className="customize-container">
        <div className="customize-contents">
          <FaRegMessage />
          <h2>Customize Recommendations</h2>
        </div>
        <p className="share-para">
          Share your specific requirements, constraints, or preferences to get
          tailored architecture recommendations:
        </p>
        <textarea
          className="customize-textarea"
          placeholder="e.g., We need faster implementation, have budget constraints, require high accuracy, prefer cloud-based solutions, need integration with existing SAP systems..."
        ></textarea>
        <button className="customize-btn">Update Recommendations</button>
      </div>

      <button className="analyze-btn">Analyze Another Process</button>
    </div>
  );
}

export default ProcessAnalyzer;
