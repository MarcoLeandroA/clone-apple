import { useState } from "react";
export function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className='header'>
      <div className="logo">
        <a href="#"><ion-icon name="logo-apple"></ion-icon></a>
      </div>
      <nav className="nav">
        <div className="logo-menu">
          <ion-icon name="menu-outline" onClick={handleClick}></ion-icon>
        </div>
        {isActive && (
          <ul className="nav-select">
            <li><a href="">Mac</a></li>
            <li><a href="">iPad</a></li>
            <li><a href="">iPhone</a></li>
            <li><a href="">Watch</a></li>
            <li><a href="">AirPods</a></li>
            <li><a href="">TV y Casa</a></li>
            <li><a href="">Entretenimiento</a></li>
            <li><a href="">Soporte</a></li>
            <li><a href="">Donde comprar</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}