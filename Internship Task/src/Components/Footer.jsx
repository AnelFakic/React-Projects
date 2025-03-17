import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-dark">
      <div className="footer-container">
        <div className="row py-5 text-white">
          <div className="col-md-3 col-sm-12">
            <h4 className="text-warning">{t("footer.title")}</h4>
            <p>{t("footer.description")}</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-warning">{t("footer.services")}</h4>
            <p>{t("footer.about")}</p>
            <p>{t("footer.policy")}</p>
            <p>{t("footer.info")}</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-warning">{t("footer.changeLanguage")}</h4>
            <p onClick={() => i18n.changeLanguage("en")} style={{ cursor: "pointer" }}>English</p>
            <p onClick={() => i18n.changeLanguage("sr")} style={{ cursor: "pointer" }}>Serbian</p>
            <p onClick={() => i18n.changeLanguage("mk")} style={{ cursor: "pointer" }}>Macedonian</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
