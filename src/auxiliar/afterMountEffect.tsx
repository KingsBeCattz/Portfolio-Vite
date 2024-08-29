import { type DependencyList, type EffectCallback, useEffect, useState } from "react";

export const afterMountEffect = (effect: EffectCallback, config?: {
  executeFirstTime?: boolean,
  loop?: boolean,
  deps?: DependencyList;
}) => {
  const [firstTime, setFirstTimeStatus] = useState(config?.executeFirstTime ?? true);
  const [repeat, setRepeatStatus] = useState(config?.loop ?? true);
  const [mounted, setStatus] = useState(false);

  useEffect(() => {
    if (!repeat) return;
    if (!firstTime) {
      setFirstTimeStatus(true);
      return;
    }

    if (!mounted) {
      setStatus(true);
      return;
    }

    effect();

    if (!config?.loop) setRepeatStatus(false);
  }, [effect, mounted, firstTime, repeat, config?.loop, ...(config?.deps ?? [])]);
};