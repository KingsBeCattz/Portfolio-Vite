import { useState } from "react";
import Avatar from "../avatar/avatar";

import './logo.render.css';

export function LogoRender({ id }: { id: string; }) {
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem(`discord.arts.${id}`) ?? "null"));
  const [status, setStatus] = useState(Boolean(data));

  if (!status) (async () => {
    if (status) return;
    await new Promise((resolve) => resolve(setStatus(true)));
    const $data = await fetch(`https://discord-arts.asure.dev/v1/user/${id}`);
    const $json = await $data.json();;

    setData($json.data);
    sessionStorage.setItem(`discord.arts.${id}`, JSON.stringify($json.data));
  })();

  return (
    <div id="logo">
      <Avatar
        size="var(--logo-size)"
        radius={50}
        border={{ color: 'var(--green)', weight: 2 }}
        alt="Avatar"
        src={
          data?.assets?.avatarURL ??
          data?.assets?.defaultAvatarURL ??
          null
        }
      />
      <span id="logo-text" className={!data ? 'loading' : ''}>
        {data?.basicInfo?.globalName ?? data?.basicInfo.username}
      </span>
    </div>
  );
}