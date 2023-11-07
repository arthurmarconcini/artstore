"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { DiscountedProduct } from "@/helpers/calculateDiscountPrice";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Pick<
    DiscountedProduct,
    "name" | "discountPercentage" | "description" | "basePrice" | "finalPrice"
  >;
}

function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityDecrease() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }
  function handleQuantityIncrease() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <section className="mb-7 flex flex-col gap-7 px-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-xs opacity-75">Novo | 100 vendidos</p>
          <h1 className="text-lg">{product.name}</h1>
          <p className="text-xs text-primary">Disponivel em estoque</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">
              R$ {product.finalPrice.toFixed(2).replace(".", ",")}
            </h1>
            <DiscountBadge>{product.discountPercentage}%</DiscountBadge>
          </div>
          <p className="flex gap-1 text-sm opacity-60">
            <span>De:</span>
            <span className="line-through">
              R$ {Number(product.basePrice).toFixed(2).replace(".", ",")}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleQuantityDecrease}
            className="rounded-lg border border-opacity-60 p-2"
          >
            <ChevronLeft size={16} />
          </button>
          {quantity}
          <button
            onClick={handleQuantityIncrease}
            className="rounded-lg border border-opacity-60 p-2"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="gap-2">
        <h1 className="font-bold">Descrição</h1>
        <h2 className="text-justify text-xs opacity-60">
          {product.description.slice(0, 250)}
        </h2>
      </div>
      <div className="flex flex-col gap-5 ">
        <Button className="text-sm font-bold uppercase">
          Adiconar ao carrinho
        </Button>
        <div className="flex items-center justify-between rounded-lg bg-accent  px-7 py-3">
          <div className="flex gap-3">
            <Image
              src="/mdi_truck-fast.svg"
              alt="truck"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-auto"
            />
            <div className="flex flex-col">
              <p className="text-xs">
                Entrega via <span className="font-bold italic">ASPacket</span>
              </p>
              <p className="text-xs text-primary">
                Entrega para todo o{" "}
                <span className="font-bold italic">Brasil</span>
              </p>
            </div>
          </div>
          <p className="text-[11px] font-bold">Frete Grátis</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
