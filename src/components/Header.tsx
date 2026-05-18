import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isCollectionsPage = location.pathname === '/collections';

  return (
    <header className="bg-white">
      <div className="grid h-[100px] place-items-center bg-museum-blue px-4 text-center">
        <Link to="/" className="text-[32px] font-bold leading-none text-white">
          🏛️ РГПУ
        </Link>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pt-8 sm:px-6 lg:px-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[20px] text-museum-muted">
          <Link className="hover:text-museum-blue" to="/">Главная</Link>
          <span>▶</span>
          <Link className="hover:text-museum-blue" to="/">Университет</Link>
          <span>▶</span>
          <Link className="hover:text-museum-blue" to="/">Виртуальные музеи и пространства</Link>
          <span>▶</span>
          <Link className="hover:text-museum-blue" to="/">Анатомический музей</Link>
          {isCollectionsPage && (
            <>
              <span>▶</span>
              <span>Коллекции и экспонаты</span>
            </>
          )}
        </div>

        <form className="mt-12 flex h-[45px] w-full max-w-[358px] items-center bg-museum-blue text-white">
          <span className="pl-4 text-2xl leading-none">⌕</span>
          <input
            className="min-w-0 flex-1 bg-transparent px-3 text-xl text-white outline-none placeholder:text-white"
            type="text"
            placeholder={isCollectionsPage ? 'Поиск по коллекциям' : 'Поиск по музею'}
          />
          <button className="sr-only" type="submit">Искать</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
