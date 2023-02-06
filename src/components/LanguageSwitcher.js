import React from "react";
import "./LanguageSwitcher.css";
import translations from "../Translations/translations.json";
import languages from "../Translations/languages.json";

export const getTranslation = (lang, text) => {
  return translations[lang][text];
};

class LanguageSwitcher extends React.Component {
  state = {
    lang: "en", // default language
  };

  changeLanguageHandler = (lang) => {
    this.setState({ lang: lang });
  };

  render() {
    return (
      <div className="languageSwitcher">
        <p>{getTranslation(this.state.lang, "paragraf")}</p>
        <h2>{getTranslation(this.state.lang, "header")}</h2>
        <p className="small">
          {getTranslation(this.state.lang, "lang-choice")}
        </p>
        <LanguageSwitcherSelector
          lang={this.state.lang}
          handleChangeLanguage={this.changeLanguageHandler}
        />
      </div>
    );
  }
}

class LanguageSwitcherSelector extends React.Component {
  onChange = (e) => {
    this.props.handleChangeLanguage(e.target.className);
  };

  render() {
    const options = languages.map((language) => {
      if (language.code !== this.props.lang) {
        return (
          <li onClick={this.onChange}>
            <div value={language.code} className={language.code}></div>
          </li>
        );
      }
    });

    return (
      <div className="lang">
        <div className={this.props.lang}></div>
        <ul class="dropdown">{options}</ul>
      </div>
    );
  }
}
export default LanguageSwitcher;
