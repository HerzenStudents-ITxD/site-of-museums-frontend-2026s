import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal, { MuseumModalItem } from '../components/Modal';

const collections: MuseumModalItem[] = [
  {
    title: 'Кровеносная система человека',
    subtitle: 'Учебная коллекция',
    description:
      'Коллекция демонстрирует строение сердца, артерий, вен и капиллярных сетей. Материалы помогают изучать кровоснабжение органов и сосудистые связи.',
    imageUrl: `${process.env.PUBLIC_URL}/images/collections/heart.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0253_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Мочеполовая система человека',
    subtitle: 'Анатомические препараты',
    description:
      'Раздел включает препараты почек, мочеточников, мочевого пузыря и органов мочеполовой системы с акцентом на топографию.',
    imageUrl: `${process.env.PUBLIC_URL}/images/collections/polo.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0240_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Опорно-двигательная система',
    subtitle: 'Костные и суставные препараты',
    description:
      'Коллекция посвящена костям, суставам, связкам и мышцам. Экспонаты показывают анатомию опоры и движения.',
    imageUrl: `${process.env.PUBLIC_URL}/images/collections/hand.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/Hand_1.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Дыхательная система человека',
    subtitle: 'Влажные и сухие препараты',
    description:
      'В коллекции представлены легкие, трахея, бронхи и препараты бронхиального дерева для изучения дыхательных путей.',
    imageUrl: `${process.env.PUBLIC_URL}/images/collections/breath.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/Breath_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
];

const exhibits: MuseumModalItem[] = [
  {
    title: 'Сердце человека',
    subtitle: 'Экспонат',
    description:
      'Сердце взрослого человека в разрезе. На препарате видны камеры сердца и внутренняя организация органа.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0253_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/collections/heart.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Препарат кисти',
    subtitle: 'Экспонат',
    description: 'Учебный препарат кисти для изучения костей, суставов и связочного аппарата.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/Hand_1.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/collections/hand.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Дыхательная система',
    subtitle: 'Экспонат',
    description: 'Препарат дыхательной системы с демонстрацией трахеи и бронхиального дерева.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/Breath_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/collections/breath.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Анатомический препарат',
    subtitle: 'Экспонат',
    description: 'Образец из учебной коллекции анатомического музея.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0173_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0173_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Музейный образец',
    subtitle: 'Экспонат',
    description: 'Препарат из фондов виртуальной экспозиции музея.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0240_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0240_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Учебный препарат',
    subtitle: 'Экспонат',
    description: 'Материал для практического изучения анатомии человека.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0319_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0319_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Препарат сосудов',
    subtitle: 'Экспонат',
    description: 'Учебный препарат сосудистой системы из фондов музея.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0225_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0225_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
  {
    title: 'Образец коллекции',
    subtitle: 'Экспонат',
    description: 'Один из препаратов, представленных в виртуальном каталоге анатомического музея.',
    imageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0360_.jpg`,
    detailImageUrl: `${process.env.PUBLIC_URL}/images/exhibits/DSC0360_.jpg`,
    primaryActionLabel: 'Фотограмметрия',
    secondaryActionLabel: '360° объект',
  },
];

const MuseumCard: React.FC<{
  title: string;
  imageUrl: string;
  onClick: () => void;
}> = ({ title, imageUrl, onClick }) => (
  <button
    className="group relative h-[345px] overflow-hidden rounded-[45px] bg-black text-left"
    onClick={onClick}
    type="button"
  >
    <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={imageUrl} alt={title} />
    <div className="absolute inset-x-0 bottom-0 flex h-[67px] items-center justify-between bg-museum-blue px-7 text-white">
      <h3 className="max-w-[170px] text-[18px] font-bold leading-[1.12]">{title}</h3>
      <span className="text-3xl leading-none">▶</span>
    </div>
  </button>
);

const CollectionsPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MuseumModalItem | null>(null);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] px-4 pb-10 pt-14 sm:px-6 lg:px-0">
        <section>
          <h1 className="text-[48px] font-bold leading-none text-museum-blue">Все коллекции</h1>
          <div className="mt-9 grid gap-x-[55px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <MuseumCard
                key={collection.title}
                title={collection.title}
                imageUrl={collection.imageUrl}
                onClick={() => setSelectedItem(collection)}
              />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-[48px] font-bold leading-none text-museum-blue">Все экспонаты</h2>
          <div className="mt-9 grid gap-x-[55px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {exhibits.map((exhibit) => (
              <MuseumCard
                key={exhibit.title}
                title={exhibit.title}
                imageUrl={exhibit.imageUrl}
                onClick={() => setSelectedItem(exhibit)}
              />
            ))}
          </div>
        </section>
      </main>

      <Modal isOpen={Boolean(selectedItem)} onClose={() => setSelectedItem(null)} item={selectedItem} />
      <Footer />
    </>
  );
};

export default CollectionsPage;
