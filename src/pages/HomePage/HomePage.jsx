import "./HomePage.scss";
import { Link } from "react-router-dom";
import ImgOne from "../../assets/images/home-img1.jpg";
import ImgTwo from "../../assets/images/home-img2.jpg";
import ImgThree from "../../assets/images/home-img3.jpg";

export default function HomePage() {
  return (
    <div className="container">
      <div className="home">
        <h1 className="home__title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home__subtitle">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link to="vans" className="home__link">
          Find your van
        </Link>
      </div>

      <div className="home-travel">
        <img src={ImgOne} alt="Vans photo" />
        <img src={ImgTwo} alt="Vans photo" />
        <img src={ImgThree} alt="Vans photo" />
      </div>
    </div>
  );
}
