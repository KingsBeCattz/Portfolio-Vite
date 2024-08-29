import { type DependencyList, type Dispatch, type EffectCallback, type SetStateAction, useEffect } from "react";

type StateType<S> = [S, Dispatch<SetStateAction<S>>];

export const beforeMountEffect = (effect: EffectCallback, config: {
  deps?: DependencyList;
  state: StateType<boolean>;
}) => {
  useEffect(() => {
    const [mounted, setStatus] = config.state;
    if (mounted) return;

    setStatus(true);
    effect();
  }, [effect, config]);
};