import React from 'react';

export const AboutPage = () => {
  return (
    <div className="sectionmain">
      <div className="about-page container" style={{ marginTop: '8%' }}>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card" style={{ width: '100%', marginTop: '4%' }}>
              <img className="card-img-top" src="/assets/img/project1.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <div className="card" style={{ width: '100%', marginTop: '4%' }}>
              <img className="card-img-top" src="/assets/img/project1.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
