//Imports
import { createContext } from "react";
import { AVALIABLE_LANGUAGES as $LANGUAGES, AVALIABLE_THEMES as $THEMES, $PATHS } from "../constants";
import { useTranslation } from "react-i18next";
//Imports

//Types
type Config<T> = {
  value: T | null;
  set: (arg0?: T) => Promise<T>;
  get: () => T;
};

type UserConfig = {
  theme: Config<$THEMES>;
  lang: Config<$LANGUAGES>;
};
//Types

//Browser Preferences
const $browserTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? $THEMES.dark : $THEMES.light;
const $browserLang = () => navigator.language.split("-")[0];

//Functions
const $asyncFunction = {
  getTheme() {
    const $storage = window.sessionStorage.getItem($PATHS.theme);
    if (!$storage) return $browserTheme();
    return $storage as $THEMES;
  },
  getLang() {
    const $storage = window.sessionStorage.getItem($PATHS.lang);
    if (!$storage) return $fallLang();
    return $storage as $LANGUAGES;
  }
};

function $getTheme() {
  return $asyncFunction.getTheme();
}
async function $setTheme(theme?: $THEMES) {
  if (!theme) {
    window.sessionStorage.removeItem($PATHS.theme);
    return $browserTheme();
  }
  window.sessionStorage.setItem($PATHS.theme, theme);
  return theme;
}

const $fallLang = () => {
  const _browserLang = $browserLang();
  if (!Object.keys($LANGUAGES).includes(_browserLang)) return $LANGUAGES.en;
  return _browserLang as $LANGUAGES;
};

function $getLang() {
  return $asyncFunction.getLang();
}

async function $setLang(lang?: $LANGUAGES) {
  if (!lang) {
    window.sessionStorage.removeItem($PATHS.lang);
    return $fallLang();
  }
  window.sessionStorage.setItem($PATHS.lang, lang);
  return lang;
}
//Functions

//Context
export const UserConfig = createContext<UserConfig>({
  theme: {
    value: window.sessionStorage.getItem($PATHS.theme) as $THEMES | null,
    set: $setTheme,
    get: $getTheme
  },
  lang: {
    value: window.sessionStorage.getItem($PATHS.lang) as $LANGUAGES | null,
    set: $setLang,
    get: $getLang
  }
});
//Context

//Provider
export const Config = ({
  children
}: { children: React.ReactNode; }) => {
  const { i18n } = useTranslation();
  const setTheme = async (theme?: $THEMES) => {
    const $theme = await new Promise((res) => res($setTheme(theme))) as $THEMES;
    const $root = document.querySelector("html");
    if ($root) $root.className = $theme;
    return $theme;
  };

  const setLang = async (lang?: $LANGUAGES) => {
    const $lang = await new Promise((res) => res($setLang(lang))) as $LANGUAGES;
    i18n.changeLanguage($lang);
    return $lang;
  };

  return (
    <UserConfig.Provider value={{ theme: { value: $asyncFunction.getTheme(), set: setTheme, get: $getTheme }, lang: { value: $asyncFunction.getLang(), set: setLang, get: $getLang } }}>
      {children}
    </UserConfig.Provider>
  );
};
//Provider