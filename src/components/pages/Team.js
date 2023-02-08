import React from "react";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();
  return <h1>{t("Team")}</h1>;
}
