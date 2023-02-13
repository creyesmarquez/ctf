import { MDBCol } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

export function UsefulLinks() {
  const { t } = useTranslation();
  return (
    <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4">{t("useful-links")}</h6>
      <p>
        <a href="#!" className="text-reset">
          {t("back-to-top")}
        </a>
      </p>
    </MDBCol>
  );
}
