//import { createPortal } from 'react-dom';
import './router.menu.css';

export default ({ active, ignore, menuId }: { active?: boolean; ignore?: boolean; menuId: string; }) => {
  const buttons = document.getElementsByClassName("menu");
  const menu = document.getElementById(menuId) as HTMLDivElement;

  const toggleMenu = () => {
    for (const button of buttons) {
      if (button.id !== "router-menu") return;
      if (!button.className.includes("ignore")) button.classList?.toggle("active");
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        return;
      };
      menu.classList.add("show");
    }
  };

  return (
    <button type="button" className={`menu ${active ? "active" : ""} ${ignore ? "ignore" : ""}`} id="router-menu" onClick={toggleMenu}>
      <div id="icon">
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>
    </button>
  );
};