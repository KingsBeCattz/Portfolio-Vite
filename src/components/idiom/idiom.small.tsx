import { t } from "i18next";
import { useContext } from "react";
import { UserConfig } from '../../context/user.config';
import { AVALIABLE_LANGUAGES, $PATHS } from "../../constants";

import './idiom.small.css';

//Flags
import spain from 'svg-country-flags/svg/es.svg';
import usa from 'svg-country-flags/svg/us.svg';

//White Assets
import language from '../../assets/white/language.svg';

export default function SmallIdiom() {
  const { lang } = (useContext(UserConfig));
  const $lang = window.sessionStorage.getItem($PATHS.lang);

  return (
    <div id="config-idiom-small">
      <div id="idiom-small">
        <img alt="" src={language} className="theme-rotate" />
        <span>
          {t('idiom', {
            lng: lang.get()
          })}
        </span>
      </div>
      <div id="idiom-menu-small">
        <button type="button" disabled={!$lang} onClick={() => lang.set()} id="config-button-option-small">
          <img alt="" src={language} style={{ width: "1.5ch", transform: "scale(1.2) translateY(7.5%)", position: "relative" }} className="theme-rotate" />
          <span>Auto</span>
        </button>
        <button type="button" disabled={AVALIABLE_LANGUAGES.es === lang.get()} onClick={() => lang.set(AVALIABLE_LANGUAGES.es)} id="config-button-option-small">
          <div className='flag-icon-container'>
            <img alt="" src={spain} className='flag-icon' />
          </div>
          {t('spanish', {
            lng: lang.get()
          })}
        </button>
        <button type="button" disabled={AVALIABLE_LANGUAGES.en === lang.get()} onClick={() => lang.set(AVALIABLE_LANGUAGES.en)} id="config-button-option-small">
          <div className='flag-icon-container'>
            <img alt="" src={usa} className='flag-icon' />
          </div>
          {t('english', {
            lng: lang.get()
          })}
        </button>
      </div>
    </div>
  );
}