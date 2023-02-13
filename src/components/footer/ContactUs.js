import { MDBCol } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export function ContactUs() {
  const { t } = useTranslation();
  return (
    <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
      <h6 className="text-uppercase fw-bold mb-4">{t("contact-us")}</h6>
      <p>
        <FontAwesomeIcon icon={faHouse} className="me-2" />
        219 Queen St, Sherbrooke, Quebec J1M 1K4
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
        daniel.peiry@catchthefire.com
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} className="me-2" />
        (819) 565-2034 / (819) 342-3202
      </p>
    </MDBCol>
  );
}
