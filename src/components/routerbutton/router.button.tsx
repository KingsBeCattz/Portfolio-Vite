import './router.button.css';

export default ({ href, name, active }: { href: string; name: string; active: boolean; }) => {
  return active ? <div className='router-button'>
    <span className='router-text'>{name}</span>
  </div> : <a href={href} className='router-button'>
    <span className='router-text'>{name}</span>
  </a>;
};