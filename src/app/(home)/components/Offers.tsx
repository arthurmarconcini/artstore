import ProductItem from "@/components/ui/product-item";
import calculateDiscountPrice from "@/helpers/calculateDiscountPrice";
import { Product } from "@prisma/client";

interface OffersProps {
  deals: Product[];
}

function Offers({ deals }: OffersProps) {
  return (
    <section className="mt-7 flex w-full flex-col gap-5">
      <h1 className="px-5 font-bold">OFERTAS</h1>
      <div className="flex w-full gap-4 overflow-x-auto overflow-y-hidden px-5 [&::-webkit-scrollbar]:hidden">
        {deals.map((deal) => {
          {
            calculateDiscountPrice;
          }
          return (
            <ProductItem key={deal.id} product={calculateDiscountPrice(deal)} />
          );
        })}
      </div>
    </section>
  );
}

export default Offers;
