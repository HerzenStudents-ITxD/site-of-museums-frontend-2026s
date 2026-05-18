import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const collections = [
  {
    title: 'Кровеносная система человека',
    image: `${process.env.PUBLIC_URL}/images/collections/heart.jpg`,
  },
  {
    title: 'Мочеполовая система человека',
    image: `${process.env.PUBLIC_URL}/images/collections/polo.jpg`,
  },
  {
    title: 'Опорно-двигательная система',
    image: `${process.env.PUBLIC_URL}/images/collections/hand.jpg`,
  },
];

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />

      <main className="mx-auto max-w-[1200px] px-4 pb-10 pt-8 sm:px-6 lg:px-0">
        <section className="grid items-start gap-8 lg:grid-cols-[660px_1fr]">
          <img
            className="h-[479px] w-full object-cover"
            src={`${process.env.PUBLIC_URL}/images/museum-room.jpg`}
            alt="Зал анатомического музея"
          />

          <div className="pt-0 lg:pt-0">
            <h1 className="text-[48px] font-bold leading-[1.16] text-museum-blue">
              Анатомический<br />музей
            </h1>
            <p className="mt-8 text-[24px] leading-[1.18] text-museum-muted">
              Фонды музея включают уникальные коллекции влажных и сухих анатомических препаратов,
              образцы микроскопической и экспериментальной техники, а также наборы учебных таблиц
              XIX - XX веков. Музейные коллекции расположены в специализированном помещении,
              оборудованном демонстрационными шкафами и витринами.
            </p>
            <Link className="mt-4 inline-block text-[24px] font-bold text-museum-blue" to="http://stilevizor.ru/anat360/">
              Подробнее ▶
            </Link>
          </div>
        </section>

        <section className="mt-32">
          <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-[48px] font-bold leading-none text-museum-blue">Коллекции и экспонаты</h2>
            <Link
              className="rounded-[10px] bg-museum-blue px-3 py-2 text-[24px] font-bold leading-none text-white"
              to="/collections"
            >
              Смотреть все экспонаты
            </Link>
          </div>

          <div className="grid gap-[31px] md:grid-cols-3">
            {collections.map((collection) => (
              <Link
                key={collection.title}
                to="/collections"
                className="group relative h-[420px] overflow-hidden rounded-t-[4px] rounded-b-[45px] bg-black"
              >
                <img
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  src={collection.image}
                  alt={collection.title}
                />
                <div className="absolute inset-x-0 bottom-0 flex h-[68px] items-center justify-between bg-museum-blue px-7 text-white">
                  <h3 className="max-w-[260px] text-[18px] font-bold leading-[1.1]">{collection.title}</h3>
                  <span className="text-3xl leading-none">▶</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="news" className="mt-24 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-[48px] font-bold leading-none text-museum-blue">Новости музея</h2>
            <p className="mt-6 text-[24px] leading-tight text-museum-muted">
              Открытие выставки работ, присланных на Международный конкурс анатомического рисунка
              V-Anatomy Art - 2026.
            </p>
            <a className="mt-4 inline-block text-[24px] font-bold text-museum-blue" href="#news">
              Подробнее ▶
            </a>
          </div>

          <div className="grid gap-10 text-[24px] leading-tight text-museum-muted">
            <section id="contacts">
              <h2 className="text-[48px] font-bold leading-none text-museum-blue">Контакты</h2>
              <p className="mt-6">Смотритель музея: Дарья Михайловна Карошевская</p>
              <p>Тел.: +7 ХХХ YYY NN NN</p>
              <a className="font-bold text-museum-blue" href="mailto:xxx@mail.ru">xxx@mail.ru</a>
            </section>

            <section id="location">
              <h2 className="text-[48px] font-bold leading-none text-museum-blue">Расположение</h2>
              <p className="mt-6">Казанская ул., 3Б, корпус 3</p>
              <p>Факультет биологии</p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MainPage;
