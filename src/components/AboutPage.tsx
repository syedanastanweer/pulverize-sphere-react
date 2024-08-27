import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../about.css';  // Import only the about.css

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, []);

  return (
    <div className="indexmaindiv">
      <div className="sectionmain">
        {/* Content from AboutPage */}
        <div className="about-page">
          <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '10%' }}>
            <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="section-home-two aboutus">
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
      </div>
    </div>
  );
}
