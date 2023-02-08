import React from "react";
import { useTranslation } from "react-i18next";

export default function Donations() {
  const { t } = useTranslation();
  return <h1>{t("Donations")}</h1>;
}
