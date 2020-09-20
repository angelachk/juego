import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';


/**
 * Componente funcional Header:
 *
 * @param {t, i18n} ----Recibe los parametros necesariospara usar los metodos de react-i18next
 *
 * @returns {<div>} Retorna el div con un Header de texto ajustable según el idioma y los botones para cambiar de Idioma de inglés a Español
 */

function Header() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
          <h1 className="App-title">{t("header.letsplay")} </h1>
          <br />
          <br />
          <button className="botonIdioma" onClick={() => i18n.changeLanguage("es")}>ES </button>
          <button className="botonIdioma" onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}

export default Header;
