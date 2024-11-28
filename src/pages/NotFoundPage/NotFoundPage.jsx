import "./NotFoundPage.scss";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h2 className="not-found__title">
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to="/" className="link-button">
        Return to Home
      </Link>
    </div>
  );
}
