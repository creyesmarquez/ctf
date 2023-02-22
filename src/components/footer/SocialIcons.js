import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SocialIcons() {
  return (
    <section className="d-flex justify-content-center p-2 border-bottom">
      <a
        href="https://www.facebook.com/profile.php?id=100064757978766"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        className="p-3 text-reset"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://www.instagram.com/ctfsherbrooke/"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        className="p-3 text-reset"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.youtube.com/@catchthefiresherbrooke6374"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        className="p-3 text-reset"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </section>
  );
}
