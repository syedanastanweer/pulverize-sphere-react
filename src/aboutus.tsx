import React, { useEffect } from 'react';
import './assets/css/about.css';

export const AboutPage: React.FC = () => {
  // Removed 'navigate' since it's not used

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, []);

  return (
    <div className="indexmaindiv" style={{ zIndex: '11' }}>
      <div className="sectionmain">
        <div className="about-page container" style={{ marginTop: '8%' }}>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="card" style={{ width: '100%', marginTop: '4%' }}>
                <img className="card-img-top" src="/assets/img/project1.jpg" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/project-details" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <div className="card" style={{ width: '100%', marginTop: '4%' }}>
                <img className="card-img-top" src="/assets/img/project1.jpg" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/project-details" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-home-two aboutus" style={{ marginTop: 80 }}>
          <div className="row">
            <div className="navnew">
              <div className="navnew-link">
                <div className="link-anchore">
                  <a href="/about-us">About Jon</a>
                  <a href="/press">Press</a>
                  <a href="/faq">Faq's</a>
                  <a href="/testimonials">Reviews</a>
                  <a href="/contact-us">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
