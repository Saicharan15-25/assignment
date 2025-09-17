import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";
import Header from "../Header/Header";

const HomePage = () => {
  const navigate = useNavigate();
  const handlestartClick = (event) => {
    event.preventDefault();
    navigate("/assignment");
  };
  return (
    <>
      {/* <Header /> */}
      <div className="homepage-container">
        <div className="hero-container">
          <div className="hero-icon">
            <span role="img" aria-label="brain">
              🧠
            </span>
          </div>
          <h1 className="hero-title">Playbook</h1>
          <h2 className="hero-subtitle">The Art of Possible</h2>
          <p className="hero-description">
            Enterprise RAG Architecture Intelligence
          </p>
          <p className="hero-detail">
            Discover the perfect AI/ML architecture for your enterprise needs.
            Our intelligent assessment engine analyzes your requirements and
            delivers tailored recommendations for implementing cutting-edge
            Retrieval-Augmented Generation solutions.
          </p>
          <div className="container">
            <div className="card">
              <div className="icons-circle">⚡</div>
              <h3>Intelligent Assessment</h3>
              <p>
                Advanced questionnaire that adapts to your specific business and
                technical requirements
              </p>
            </div>

            <div className="card">
              <div className="icons-circle">🛡️</div>
              <h3>Enterprise-Grade Solutions</h3>
              <p>
                Comprehensive architecture recommendations with security,
                compliance, and scalability built-in
              </p>
            </div>

            <div className="card">
              <div className="icons-circle">🌐</div>
              <h3>Business & Technical Views</h3>
              <p>
                Dual perspectives providing both strategic business insights and
                detailed technical implementation guidance
              </p>
            </div>
            <Link to="/assignment">
              <button className="cta-button" onClick={handlestartClick}>
                <VscDebugStart /> Start Your Journey
              </button>
            </Link>
          </div>

          <div className="stats-section">
            <p className="stats-subtext">
              • 10 Strategic Questions • 3 Tailored Recommendations • Complete
              Implementation Roadmap
            </p>

            <hr className="line" />

            <div className="stats-grid ">
              <div>
                <div className="stat">
                  <h2 className="blue">50+</h2>
                  <p className="text-course">AI/ML Tools</p>
                </div>
                <div className="stat">
                  <h2 className="orange">3</h2>
                  <p className="text-course">Solution</p>
                </div>
              </div>
              <div>
                <div className="stat">
                  <h2 className="blue">7</h2>
                  <p className="text-course">Architecture Steps Paths</p>
                </div>
                <div className="stat">
                  <h2 className="orange">100%</h2>
                  <p className="text-course">Customized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
