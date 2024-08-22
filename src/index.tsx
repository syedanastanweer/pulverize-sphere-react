import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
			<App />
			<section className="section-home websection">
				<div id="particles-js"></div>
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
					<div className="row">
						<div className="navnew">
							<div className="navnew-link">
								<div className="link-anchore">
									<a href="about-us.php">About Jon</a>
									<a href="press.php">Press</a>
									<a href="faq.php">Faq's</a>
									<a href="testimonials.php">Reviews</a>
									<a href="contact-us.php">Contact Me</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
