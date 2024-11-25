import "./HomePage.scss";
import { Link } from "react-router-dom";
import homeImages from "../../static/staticHomeImg";

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

      <div className="home-wrap">
        <h3 className="home-travel__title">
          Thousands of our clients travel around the world for unforgettable
          emotions and impressions!
        </h3>

        <div className="home-travel">
          {homeImages.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
