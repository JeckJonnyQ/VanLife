import "./AboutPage.scss";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-page__bg"></div>
      <div className="about-page__content">
        <h2 className="about-page__content_title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="about-page__content_desc">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about-page__content_desc">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className="about-page__cta">
        <h2 className="about-page__cta_text">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>

        <Link to="/vans" className="about-page__cta_link-btn">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
