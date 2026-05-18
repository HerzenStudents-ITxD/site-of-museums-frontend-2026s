import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="grid min-h-[710px] place-items-center bg-white px-4 text-center">
        <div>
          <div className="text-[240px] font-black leading-none text-museum-blue sm:text-[320px]">
            404
          </div>
          <h1 className="mt-8 text-[48px] font-bold leading-none text-museum-blue">Страница не найдена</h1>
          <button
            onClick={() => navigate(-1)}
            className="mt-8 h-12 rounded-[10px] bg-museum-blue px-8 text-[24px] font-bold leading-none text-white"
          >
            Вернуться на предыдущую страницу
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
