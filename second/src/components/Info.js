import image from "../images/LauraSmith.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <div className="info">
      <img src={image} className="info__image"></img>
      <h1 className="info__name">Laura Smith</h1>
      <h4 className="info__job">Frontend Developer</h4>
      <h5 className="info__website">laurasmith.website</h5>
      <div className="button">
        <button className="btn button__email">
          <div className="btn__icon">
            <FontAwesomeIcon icon={faEnvelope} className="btn__icon" />
          </div>
          <div className="btn__text">Email</div>
        </button>
        <button className="btn button__linkedIn">
          <div className="btn__icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="btn__text">LinkedIn</div>
        </button>
      </div>
    </div>
  );
}

export default Info;
