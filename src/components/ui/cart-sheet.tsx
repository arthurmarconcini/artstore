import {
  ChevronLeft,
  ChevronRight,
  ShoppingCartIcon,
  Trash,
} from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { useCart } from "@/providers/cart";
import BadgeTitle from "./badge-title";
import Image from "next/image";

function CartSheet() {
  const { cart, increaseQuantity, decreaseQuantity, removeToCart } = useCart();

  function handleIncreaseQuantity(id: string) {
    increaseQuantity(id);
  }

  function handleDecreaseQuantity(id: string) {
    decreaseQuantity(id);
  }

  function handleRemoveToCart(id: string) {
    removeToCart(id);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%]">
        <SheetHeader className="flex items-start justify-center ">
          <BadgeTitle title="Carrinho">
            <ShoppingCartIcon size={16} />
          </BadgeTitle>
        </SheetHeader>
        <div className="flex  flex-col gap-5">
          <div className="mt-7 flex  flex-col gap-5">
            {cart.map((item) => {
              return (
                <div key={item.product.id} className="flex items-center gap-4">
                  <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
                    <Image
                      src={item.product.imageUrls[0]}
                      alt={item.product.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-[60%] w-[80%] object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-between gap-1 ">
                    <div className="flex flex-col">
                      <h1 className="text-xs font-normal">
                        {item.product.name}
                      </h1>
                      <div className="flex items-end gap-1">
                        <h2 className="text-sm font-bold ">
                          R${" "}
                          {item.product.finalPrice.toFixed(2).replace(".", ",")}
                        </h2>
                        <h3 className="pb-[1.5px] text-xs font-normal line-through opacity-60">
                          R${" "}
                          {Number(item.product.basePrice)
                            .toFixed(2)
                            .replace(".", ",")}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center  gap-2">
                      <Button
                        variant={"outline"}
                        className="rounded-lg border border-accent p-2"
                        onClick={() => handleDecreaseQuantity(item.product.id)}
                      >
                        <ChevronLeft size={20} />
                      </Button>

                      <span>{item.quantity}</span>
                      <Button
                        variant={"outline"}
                        className="rounded-lg border border-accent p-2"
                        onClick={() => handleIncreaseQuantity(item.product.id)}
                      >
                        <ChevronRight size={20} />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant={"outline"}
                    onClick={() => handleRemoveToCart(item.product.id)}
                  >
                    <Trash size={14} />
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="flex justify-between border-t border-accent py-1.5 text-xs font-normal opacity-75">
                <p>subtotal</p>
                <span>
                  R${" "}
                  {cart
                    .reduce(
                      (total, item) =>
                        total + Number(item.product.basePrice) * item.quantity,
                      0,
                    )
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>
              <div className="flex justify-between border-t border-accent py-1.5 text-xs font-normal opacity-75">
                <p>Entrega</p>
                <span>Entrega grátis</span>
              </div>
              <div className="flex justify-between border-t border-accent py-1.5 text-xs font-normal opacity-75">
                <p>Descontos</p>
                <span>
                  -R${" "}
                  {cart
                    .reduce(
                      (total, item) =>
                        total +
                        Number(item.product.basePrice) * item.quantity -
                        Number(item.product.finalPrice) * item.quantity,
                      0,
                    )
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>
              <div className="flex justify-between border-t border-accent py-1.5 text-sm font-bold">
                <p>Total</p>
                <span>
                  R${" "}
                  {cart
                    .reduce(
                      (total, item) =>
                        total + Number(item.product.finalPrice) * item.quantity,
                      0,
                    )
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>
            </div>
            <Button>Finalizar compra</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
