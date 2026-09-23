import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aponhat_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBadgeAnimate, setCartBadgeAnimate] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('aponhat_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, variant = 'Default', quantity = 1) => {
    const unitPrice = Number(product.retail_price || product.price);
    
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            price: unitPrice,
            reseller_price: Number(product.reseller_price || product.price),
            image: product.image,
            variant: variant,
            quantity: quantity,
            source_url: product.source_url
          }
        ];
      }
    });

    // Set last added item for popup toast notification
    setLastAddedItem({
      id: product.id,
      title: product.title,
      price: unitPrice,
      image: product.image,
      variant: variant,
      quantity: quantity
    });
    setToastOpen(true);

    // Trigger bounce animation on cart icon
    setCartBadgeAnimate(true);
    setTimeout(() => setCartBadgeAnimate(false), 700);
  };

  const closeToast = () => {
    setToastOpen(false);
  };

  const updateQuantity = (id, variant, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id && item.variant === variant) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id, variant) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        cartBadgeAnimate,
        lastAddedItem,
        toastOpen,
        closeToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
