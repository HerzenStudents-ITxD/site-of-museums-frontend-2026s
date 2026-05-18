import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  fallbackSrc = '/exhibits/placeholder.svg',
  className 
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    // Предотвращаем бесконечный цикл
    if (errorCount === 0) {
      setErrorCount(1);
      setImgSrc(fallbackSrc);
    }
  };

  // Сброс при изменении src
  useEffect(() => {
    setImgSrc(src);
    setErrorCount(0);
  }, [src]);

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;