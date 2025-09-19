import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Akash AnajePatil </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I have completed my B.E. in Mechanical Engineering from Hirasugar
            Institute Of Technology, Nidasoshi.
            <br />
            I have also completed my Diploma in Mechanical Engineering from SJPN Trust's Polytechnic
            College, Nidasoshi.
            <br />
            I am keenly interested in <span className="purple">coding</span> and
            passionate about learning new <span className="purple">tech
            stacks</span> while building user-friendly and interactive web
            experiences.
            <br />
            I have also gained industry exposure through my internship
            experience and projects.  
          </p>

          {/* EXPERIENCE SECTION */}
          <h5 className="purple" style={{ textAlign: "left" }}>Experience</h5>
          <ul style={{ textAlign: "left" }}>
            <li>
              <ImPointRight /> <strong>Mechanical Engineer Intern</strong> – INDO MIM Pvt. Ltd, Bengaluru  
              (Feb 2025 – May 2025)  
              <ul>
                <li>R&D: Developed new materials/processes to enhance performance and manufacturing efficiency.</li>
                <li>Product Engineering: Designed products meeting customer specifications and industry standards.</li>
                <li>Quality Assurance: Ensured products met quality standards via testing and inspection.</li>
                <li>Explored HTML/CSS/JS to visualize and send daily test result reports to team.</li>
              </ul>
            </li>
          </ul>

          {/* PROJECTS SECTION */}
          <h5 className="purple" style={{ textAlign: "left" }}>Projects</h5>
          <ul style={{ textAlign: "left" }}>
            <li>
             <strong>Portfolio Website</strong> | HTML, CSS, React, JavaScript  
              – Built a dynamic portfolio with reusable React components and used React Hooks + Context API for state management.
            </li>
            <li>
             <strong>Blogging Website</strong> | HTML, CSS, JavaScript, Firebase  
              – Created a blogging platform with real-time database storage for seamless content publishing and retrieval.  
            </li>
            <li>
            <strong>Rain Sensing and Protection Cover</strong> | IoT, Google Cloud Console  
              – Automatic crop cover system using Arduino Uno and rain sensors. Integrated forecasting APIs for predictive action.  
            </li>
          </ul>

          {/* CERTIFICATIONS SECTION */}
          <h5 className="purple" style={{ textAlign: "left" }}>Certifications</h5>
          <ul style={{ textAlign: "left" }}>
            <li> Google Analytics – Coursera</li>
            <li> Python Full Stack – Pentagon Space, Bangalore</li>
          </ul>

          {/* ACHIEVEMENTS SECTION */}
          <h5 className="purple" style={{ textAlign: "left" }}>Achievements / Extracurricular</h5>
          <ul style={{ textAlign: "left" }}>
            <li> Awarded the <strong>“Best Project of the year 2024-25”</strong> by Karnataka State Council for Science and Technology (KSCST)</li>
            <li>2nd place – Major Project (College and University)</li>
            <li> 2nd place – Mini Project Exhibition (College)</li>
          </ul>

          {/* OTHER ACTIVITIES */}
          <h5 className="purple" style={{ textAlign: "left" }}>Apart from coding, some other activities I love:</h5>
          <ul style={{ textAlign: "left" }}>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
