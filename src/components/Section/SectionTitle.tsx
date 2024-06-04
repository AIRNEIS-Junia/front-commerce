import React from "react";
import { useTranslation } from "react-i18next";

const SectionTitle = () => {
  const { t } = useTranslation();

  return (
    <div className={"py-small border-b border-oyster text-center "}>
      <h2>{t("enjoy_title")}</h2>
    </div>
  );
};

export default SectionTitle;
