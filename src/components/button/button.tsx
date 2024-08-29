export function ButtonRow({ children }: { children: React.ReactNode; }) {
  return <div className="button-row">
    {children}
  </div>;
}

type BaseButtonOption<STYLES> = {
  style: STYLES;
  label: string;
  emoji?: string;
  disabled?: boolean;
  action?: () => unknown;
  url?: string;
};

export function Button({ style, label, emoji, disabled, action, url }: BaseButtonOption<1 | 2 | 3 | 4>) {
  if (url) {
    return <a href={url} className={`button url ${disabled ? "disabled-button" : ""}`}>
      { }
      {label}
    </a>;
  };
}