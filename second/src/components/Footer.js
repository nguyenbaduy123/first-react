import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faTwitterSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faGithubSquare} />
    </footer>
  );
}

export default Footer;
