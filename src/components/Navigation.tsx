import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const itemClass = 'text-[24px] leading-none text-museum-muted transition hover:text-museum-blue';

  return (
    <nav className="bg-white">
      <ul className="mx-auto mt-8 flex max-w-[1200px] list-none flex-wrap items-center gap-x-4 gap-y-3 px-4 text-museum-muted sm:px-6 lg:px-0">
        <li>
          <Link to="/collections" className={`${itemClass} ${location.pathname === '/collections' ? 'text-museum-blue' : ''}`}>
            Коллекции и экспонаты
          </Link>
        </li>
        <li className="h-8 w-px bg-museum-line" />
        <li><a className={itemClass} href="#news">Новости музея</a></li>
        <li className="h-8 w-px bg-museum-line" />
        <li><a className={itemClass} href="#contacts">Контакты</a></li>
        <li className="h-8 w-px bg-museum-line" />
        <li><a className={itemClass} href="#location">Расположение</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
