import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar({darkMode, handleDarkMode}) {

  const [menuBar, setMenuBar] = useState(false);

  const showSidebar = () => {
    setMenuBar(!menuBar);
  };
  const hideSideBar = () => {
    setMenuBar(false);
  };
  return (
    <div className='navbar'>
      <nav>
        <h1>Haryomi<span className='span-blue'>dey</span></h1> 
        <ul className={!menuBar ? 'nav-element' : 'nav-element active'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#subscribe">Subscribe</a></li>
          <span onClick={hideSideBar} className="material-symbols-outlined pointer close">
            close
          </span>
        </ul>
        <div className='mode-open'>
          <div className='mode'>
            {
              darkMode
              ?
              <span className="material-symbols-outlined pointer light" onClick={handleDarkMode}>
                brightness_6
              </span>
              :
                <span className="material-symbols-outlined pointer dark" onClick={handleDarkMode}>
                  dark_mode
                </span>
            }
          </div>
          <div className='open'>
            <span onClick={ showSidebar }className="material-symbols-outlined pointer">
                menu
              </span>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar;