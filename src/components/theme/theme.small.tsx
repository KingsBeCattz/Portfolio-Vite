import { useContext, useState } from "react";
import { UserConfig } from '../../context/user.config';
import { AVALIABLE_THEMES, $PATHS } from "../../constants";
import { t } from "i18next";

import moon from '../../assets/white/moon.svg';
import sun from '../../assets/white/sun.svg';
import lightning from "../../assets/white/lightning.svg";

import './theme.small.css';

export default function ThemeSmall() {
  const { theme, lang } = (useContext(UserConfig));
  const $theme = window.sessionStorage.getItem($PATHS.theme);
  const [$asset, $setAsset] = useState(!$theme ? lightning : (theme.get() === AVALIABLE_THEMES.light ? sun : moon));

  async function setTheme($$theme?: AVALIABLE_THEMES) {
    await theme.set($$theme);
    console.log($theme);
    $setAsset(!$$theme ? lightning : (theme.get() === AVALIABLE_THEMES.light ? sun : moon));
  }

  return (
    <div id="config-theme-small">
      <div id="theme-small">
        <img alt="" src={$asset} className="theme-rotate" />
        <span>
          {t('theme', {
            lng: lang.get()
          })}
        </span>
      </div>
      <div id="theme-menu-small">
        <button type="button" disabled={!$theme} onClick={() => setTheme()} id="config-button-option-small">
          <div className='theme-icon-container'>
            <img alt="" src={lightning} className='theme-icon theme-rotate' />
          </div>
          Auto
        </button>
        <button type="button" disabled={AVALIABLE_THEMES.dark === theme.get()} onClick={() => setTheme(AVALIABLE_THEMES.dark)} id="config-button-option-small">
          <div className='theme-icon-container'>
            <img alt="" src={moon} className='theme-icon theme-rotate' />
          </div>
          {t('dark.theme')}
        </button>
        <button type="button" disabled={AVALIABLE_THEMES.light === theme.get()} onClick={() => setTheme(AVALIABLE_THEMES.light)} id="config-button-option-small">
          <div className='theme-icon-container'>
            <img alt="" src={sun} className='theme-icon theme-rotate' />
          </div>
          {t('light.theme')}
        </button>
      </div>
    </div>
  );
}