import React, { useState, useRef } from 'react';
import { ZoomIn, Eye, Sparkles } from 'lucide-react';

export default function ShopifyProductViewer({ product }) {
  const allImages = product?.images && product.images.length > 0 
    ? product.images 
    : [product?.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'];

  // Add dummy angles if only 1 image exists for full Shopify gallery feel
  const gallery = allImages.length > 1 ? allImages : [
    allImages[0],
    allImages[0],
    allImages[0]
  ];

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
      
      {/* Side Thumbnail Rail (Shopify Style) */}
      <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto no-scrollbar max-h-96 shrink-0 py-1">
        {gallery.map((imgUrl, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(imgUrl)}
            className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-gray-50 dark:bg-dark-bg ${
              activeImage === imgUrl
                ? 'border-apon-600 shadow-md ring-2 ring-apon-500/20 scale-102'
                : 'border-gray-200 dark:border-dark-border hover:border-gray-300 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={imgUrl}
              alt={`Angle ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* Main Preview with Interactive Cursor Magnifying Zoom */}
      <div 
        ref={imageRef}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        className="relative flex-1 aspect-square rounded-2xl overflow-hidden bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border cursor-crosshair group select-none"
      >
        <img
          src={activeImage}
          alt={product?.title || 'Product view'}
          style={{
            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
            transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
          }}
          className="w-full h-full object-contain p-4 transition-transform duration-150 ease-out"
        />

        {/* Hover Hint Overlay */}
        <div className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-semibold flex items-center gap-1 backdrop-blur-xs transition-opacity duration-300 pointer-events-none ${
          isZoomed ? 'opacity-0' : 'opacity-80'
        }`}>
          <ZoomIn className="w-3 h-3" />
          <span>জুম করতে মাউস রাখুন</span>
        </div>

        {/* Category Badge */}
        {product?.category_name && (
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-dark-card/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold text-apon-700 dark:text-apon-300 border border-apon-200/60 dark:border-dark-border pointer-events-none">
            {product.category_name}
          </div>
        )}
      </div>

    </div>
  );
}
