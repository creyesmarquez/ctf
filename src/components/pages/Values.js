import React from "react";
import { useTranslation } from "react-i18next";

export default function Values() {
  const { t } = useTranslation();
  return <h1>{t("Values")}</h1>;
}
