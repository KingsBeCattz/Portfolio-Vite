import { type Dispatch, type SetStateAction, useEffect } from "react";

type StateType<S> = [S, Dispatch<SetStateAction<S>>];

export function fetchEffect<T>(url: RequestInfo | URL, config: {
  data: StateType<T | null>;
  loaded: StateType<boolean>;
  error: StateType<Error | null>;
  init?: RequestInit;
}) {
  if (config.loaded[0]) return;

  useEffect(() => {
    fetch(url, config.init).then((out) => out.json().then(config.data[1])).catch(e => config.error[1](e));
    config.loaded[1](true);
  }, [url, config]);
};