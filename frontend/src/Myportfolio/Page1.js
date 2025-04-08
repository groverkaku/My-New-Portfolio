import React, { useEffect, useState } from "react";
import { loadTypingEffect } from "./Script.js";
import "./Page1.css";
import "./Script.js"; // Only if you're importing for side-effects (e.g., running some global JS)
import { Helmet } from 'react-helmet';



function Page1() {
    useEffect(() => {
        loadTypingEffect(); // 👈 load on page render
      }, []);

      var [formdata,setform]=useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""


      })
      const handleChange = (e) => {
        setform((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handlesubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
          });
    
          const result = await res.json();
          alert(result.message);
          setform({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to send message.");
        }
  
        
      }
      

    
  return (
    <>

<Helmet>
        <title>Bhanwar Grover | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Bhanwar Grover - a Full Stack Web Developer skilled in React, Node.js, MongoDB, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Bhanwar Grover, Web Developer, React, Node.js, MongoDB, Full Stack Developer, Portfolio"
        />
        <meta name="author" content="Bhanwar Grover" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Bhanwar Grover | Full Stack Developer" />
        <meta
          property="og:description"
          content="Passionate Full Stack Developer specializing in React, Express.js, and MongoDB."
        />
        <meta property="og:image" content="https://yourdomain.com/image folder/pic.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* Floating Elements */}
      <div className="floating-element" style={{ top: "15%", left: "10%", animation: "float 8s infinite linear" }}></div>
      <div className="floating-element" style={{ top: "40%", left: "25%", animation: "float 12s infinite linear" }}></div>
      <div className="floating-element" style={{ top: "75%", left: "60%", animation: "float 10s infinite linear" }}></div>
      <div className="floating-element" style={{ top: "30%", left: "80%", animation: "float 15s infinite linear" }}></div>

      {/* Skew Elements */}
      <div className="skew-element" style={{ top: "20%", left: "50%", animation: "rotate 20s infinite linear" }}></div>
      <div className="skew-element" style={{ top: "60%", left: "10%", animation: "rotate 15s infinite reverse linear" }}></div>

      {/* Header */}
      <header className="header">
        <a href="#" className="logo">Portfolio</a>
        <nav className="navbar">
          <a href="#" style={{ "--i": 1 }} className="action">Home</a>
          <a href="#about" style={{ "--i": 2 }}>About</a>
          <a href="#skills" style={{ "--i": 3 }}>Skills</a>
          <a href="#services" style={{ "--i": 4 }}>Services</a>
          <a href="#projects" style={{ "--i": 5 }}>Projects</a>
          <a href="#contact" style={{ "--i": 6 }}>Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home">
        <div className="home-content">
          <h3>Hello It's Me</h3>
          <h1>Bhanwar Grover</h1>
          <h3>And I'm a <span className="text"></span></h3>
          <p>I am a Web Designer<br />Expertise in Website design, Frontend design, and more....</p>
          <div className="home-sci">
            <a href="#" style={{ "--i": 7 }}><i className="fa-brands fa-facebook"></i></a>
            <a href="#" style={{ "--i": 8 }}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" style={{ "--i": 9 }}><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <a href="#" className="btn-box">More About Me</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src="./image folder/pic.png" alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>Full Stack Developer!</h4>
          <p>I am a passionate Full Stack Web Developer eager to build innovative and user-friendly web applications...</p>
          <a href="#" className="btn-box">More About Me</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="Service" id="services">
        <div className="container">
          <h1 className="sub-title">My <span>Services</span></h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-crop-simple" style={{ color: "aqua" }}></i>
              <h2>Web Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <a href="#" className="read">Learn more</a>
            </div>
            <div>
              <i className="fa-brands fa-apple" style={{ color: "aqua" }}></i>
              <h2>Web Developer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <a href="#" className="read">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      
    {/* Skills Section */}
<section className="skills" id="skills">
  <h2>My <span>Skills</span></h2>
  <div className="skills-container">

    {/* Frontend Skills */}
    <div className="skills-category">
      <h3><i className="fa-solid fa-code skill-icon"></i>Frontend Development</h3>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-brands fa-html5 skill-icon"></i>HTML</span>
          <span>95%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage" ></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-brands fa-css3-alt skill-icon"></i>CSS</span>
          <span>90%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage" ></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-brands fa-js skill-icon"></i>JavaScript</span>
          <span>85%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-brands fa-react skill-icon"></i>React</span>
          <span>80%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage" ></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-solid fa-mobile-screen skill-icon"></i>Responsive Design</span>
          <span>92%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage" ></div>
        </div>
      </div>
    </div>

    {/* Backend Skills */}
    <div className="skills-category">
      <h3><i className="fa-solid fa-server skill-icon"></i>Backend Development</h3>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-brands fa-node-js skill-icon"></i>Node.js</span>
          <span>85%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage" ></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-solid fa-plug skill-icon"></i>Express.js</span>
          <span>82%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage" ></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-name">
          <span><i className="fa-solid fa-database skill-icon"></i>MongoDB</span>
          <span>78%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-percentage"></div>
        </div>
      </div>
    </div>

  </div>
</section>
<section class="projects" id="projects">
        <h2 class="heading" >My <span>Projects</span></h2>
        <div class="projects-container">
            <div class="project-card">
                
                <h3>GLASS PROJECT</h3>
                <p>A brief description of the project goes here.</p>
                <a href="https://srtuffglass.com/" target="_blank" class="read">View Project</a>
            </div>
    
            <div class="project-card">
               
                <h3>Project Title 2</h3>
                <p>A brief description of the project goes here.</p>
                <a href="https://your-live-demo-link.com" target="_blank" class="read">View Project</a>
            </div>
    
            <div class="project-card">
              
                <h3>Project Title 3</h3>
                <p>A brief description of the project goes here.</p>
                <a href="https://github.com/yourusername/project3" target="_blank" class="read">View Project</a>
            </div>
        </div>
    </section>

    <section className="contact" id="contact">
  <h2 className="heading">Contact <span>Me</span></h2>
  <div className="contact-container">
    <div className="contact-info">
      <div className="contact-card">
        <i className="fa-solid fa-envelope"></i>
        <h3>Email</h3>
        <p>bhavargrover4@gmail.com</p>
      </div>
      <div className="contact-card">
        <i className="fa-solid fa-phone"></i>
        <h3>Phone</h3>
        <p>+91 9350117308</p>
      </div>
      <div className="contact-card">
        <i className="fa-solid fa-location-dot"></i>
        <h3>Location</h3>
        <p>Yamuna-nagar, Haryana</p>
      </div>
    </div>

    <div className="contact-form">
      <form onSubmit={handlesubmit}>
        <div className="input-box">
          <div className="input-field">
          <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Full Name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
          <input type="email" name="email" value={formdata.email} onChange={handleChange} placeholder="Email" required />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
          <input type="tel" name="phone" value={formdata.phone} onChange={handleChange} placeholder="Phone" />
            <span className="focus"></span>
          </div>
          <div className="input-field">
          <input type="text" name="subject" value={formdata.subject} onChange={handleChange} placeholder="Subject" />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
        <textarea name="message" value={formdata.message} onChange={handleChange} placeholder="Message" required />
          <span className="focus"></span>
        </div>

        <button type="submit" className="read">Submit</button>
      </form>
    </div>
  </div>
</section>

      
    </>
  );
}

export default Page1;
