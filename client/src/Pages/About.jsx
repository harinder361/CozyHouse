import './About.css'
import OIP from '../Assets/OIP.jpg'
import R from "../Assets/R.jpg"

const About = () => {
  return (
    <>
    <section className="about-section">
        <div className="container">
            <div className="about-content">
                <div className="section-title">
                    <span className="title-top">Get to Know Us</span>
                    <h2>About Our Company</h2>
                    <div className="separator"></div>
                </div>
                <div className="three-dog">
                    <img src={OIP} className="pop-out"/>
                </div>
                <p>Welcome to our website! We are a team of passionate individuals dedicated to providing loving care and support to animals in need. As a pet shelter, our mission is to rescue, rehabilitate, and rehome abandoned and neglected pets, making a positive impact on their lives and the community.</p>
                <p>With years of experience in animal welfare, we understand the unique needs of each furry friend and work tirelessly to ensure they receive the love and care they deserve.                </p>
                <div className="about-features">
                    <div className="feature pop-out">
                        <i className="fas fa-cog"></i>
                        <h3>Compassionate Care</h3>
                        <p>We lead with empathy, continuously seeking new ways to provide compassionate care and support to animals in need.</p>
                    </div>
                    <div className="feature pop-out">
                        <i className="fas fa-users"></i>
                        <h3>Devoted Team</h3>
                        <p>Our dedicated team is unwaveringly committed to providing exceptional service and support.</p>
                    </div>
                    <div className="feature pop-out">
                        <i className="fas fa-chart-line"></i>
                        <h3>Continual Advancement</h3>
                        <p>We consistently grow and refine our operations to better meet the dynamic needs of our furry friends and their loving families.</p>
                    </div>
                </div>
                <a href="#" className="btn">Learn More</a>
            </div>
        </div>
        <div className="separator"></div>
    </section>
    <section id="about-section">
        <div className="about-left">
            <img src={R} alt="About Img" className="pop-out" />
        </div>
        <div className="about-right">
            <h4>A Tail of Compassion</h4>
            <h1>A Paw-sitive Journey</h1>
            <p>At CozyHouse , our mission is simple: to provide a safe and loving haven for animals in need. With compassion at the core of everything we do, we tirelessly strive to rescue, rehabilitate, and rehome pets who have been abandoned, neglected, or surrendered.

                Our dedicated team of animal lovers works tirelessly to ensure that each furry friend receives the care, attention, and affection they deserve. From providing medical treatment and nutritious meals to offering behavioral training and enrichment activities, we prioritize the well-being and happiness of every animal under our care.
                
                But our commitment extends beyond just the animals. We're here to support and empower our community, offering education, resources, and outreach programs to promote responsible pet ownership and foster a deeper understanding of animal welfare.
                
                Together, with your support, we're making a paw-sitive difference in the lives of countless animals and the humans who love them. Join us on our journey to create a world where every pet has a loving home and every heart is filled with joy.
            </p>
            <div className="address">
                <ul>
                    <li>
                        <span className="address-logo">
                            <i className="fas fa-paper-plane"></i>
                        </span>
                        <p>Address</p>
                        <span className="saprater">:</span>
                        <p>Patiala, punjab, India</p>
                    </li>
                    <li>
                        <span className="address-logo">
                            <i className="fas fa-phone-alt"></i>
                        </span>
                        <p>Phone No</p>
                        <span className="saprater">:</span>
                        <p>+91 987-654-4321</p>
                    </li>
                    <li>
                        <span className="address-logo">
                            <i className="far fa-envelope"></i>
                        </span>
                        <p>Email ID</p>
                        <span className="saprater">:</span>
                        <p>CozyHouse@gmail.com</p>
                    </li>
                </ul>
            </div>
           
        </div>
    </section>
    </>
  )
}

export default About
