"use client";

import { DiscountedProduct } from "@/helpers/calculateDiscountPrice";

import React, { createContext, useContext, ReactNode, useState } from "react";

// Definindo os tipos para os itens do carrinho
interface CartItem {
  product: DiscountedProduct;
  quantity: number;
}

// Criando o contexto
const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: DiscountedProduct, quantity: number) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeToCart: (productId: string) => void;
}>({
  cart: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeToCart: () => {},
});

// Definindo um provedor para o contexto
interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const removeToCart = (productId: string) => {
    setCart((prev) => {
      return prev.filter(({ product }) => product.id !== productId);
    });
  };

  const addToCart = (product: DiscountedProduct, quantity: number) => {
    setCart((prevCart) => {
      // Verifica se o produto já está no carrinho
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        // Se o produto já está no carrinho, atualiza a quantidade
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        // Se o produto não está no carrinho, adiciona como um novo item
        return [...prevCart, { product, quantity }];
      }
    });
  };

  // Função para aumentar a quantidade de um item no carrinho
  const increaseQuantity = (productId: string) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  };

  const decreaseQuantity = (productId: string) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Não permite que a quantidade seja menor que 1
          : item,
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Criando um hook personalizado para usar o contexto
const useCart = (): {
  cart: CartItem[];
  addToCart: (product: DiscountedProduct, quantity: number) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeToCart: (productId: string) => void;
} => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
