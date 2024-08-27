import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './components/App';
import { AboutPage } from './components/AboutPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='indexmaindiv'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
        {/* This section applies globally */}
        <section className="sectionmain">
          <div className="section-home-one">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* Any content you want within the section */}
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h2>Pulverize the stigma</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title-two">
                    <h2>Navigating the pathways to well-being</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-home-two">
            <div className="row">
              <div className="navnew">
                <div className="navnew-link">
                  <div className="link-anchore">
                    <a href="/about-us" className="nav-link">About Jon</a>
                    <a href="/press">Press</a>
                    <a href="/faq">Faq's</a>
                    <a href="/testimonials">Reviews</a>
                    <a href="/contact-us">Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
