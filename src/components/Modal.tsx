import React, { useEffect, useState } from 'react';

export interface MuseumModalItem {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  detailImageUrl?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  primaryActionUrl?: string;
  secondaryActionUrl?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MuseumModalItem | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [displayItem, setDisplayItem] = useState<MuseumModalItem | null>(item);

  useEffect(() => {
    if (isOpen && item) {
      setDisplayItem(item);
      setShouldRender(true);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShouldRender(false);
      setDisplayItem(null);
    }, 240);
    return () => window.clearTimeout(timeoutId);
  }, [isOpen, item]);

  if (!shouldRender || !displayItem) return null;

  const openUrl = (url?: string) => {
    if (!url || url === '#') return;
    window.open(url, '_blank');
  };

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 transition-opacity duration-300 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="museum-modal-title"
    >
      <div
        className={`relative grid max-h-[90vh] w-full max-w-[1093px] overflow-hidden rounded-[45px] bg-[#010101] text-white shadow-2xl transition duration-300 ease-out lg:min-h-[681px] lg:grid-cols-[650px_1fr] ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-7 top-7 z-10 h-9 w-9 text-[#797979] transition hover:scale-110 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <span className="absolute left-1/2 top-1/2 block h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
          <span className="absolute left-1/2 top-1/2 block h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
        </button>

        <div className="flex items-center bg-black lg:py-[72px]">
          <img
            className="h-[300px] w-full object-cover sm:h-[408px] lg:h-[408px]"
            src={displayItem.imageUrl}
            alt={displayItem.title}
          />
        </div>

        <div className="flex flex-col justify-center px-6 pb-8 pt-24 sm:px-10 lg:px-12 lg:pt-20">
          <p className="text-lg font-bold text-[#d9d9d9]">{displayItem.subtitle}</p>
          <h2 id="museum-modal-title" className="mt-2 text-[34px] font-bold leading-tight">
            {displayItem.title}
          </h2>
          <p className="mt-5 max-w-[420px] text-[18px] leading-snug text-[#d9d9d9]">
            {displayItem.description}
          </p>

          <div className="mt-10 grid gap-3">
            {displayItem.primaryActionLabel && (
              <button
                className="h-[38px] w-fit rounded-[10px] bg-[#797979] px-6 text-[18px] font-bold text-white transition hover:bg-[#8d8d8d]"
                onClick={() => openUrl(displayItem.primaryActionUrl)}
                type="button"
              >
                {displayItem.primaryActionLabel}
              </button>
            )}
            {displayItem.secondaryActionLabel && (
              <button
                className="h-8 w-fit rounded-[10px] bg-[#797979] px-6 text-base font-bold text-white transition hover:bg-[#8d8d8d]"
                onClick={() => openUrl(displayItem.secondaryActionUrl)}
                type="button"
              >
                {displayItem.secondaryActionLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
