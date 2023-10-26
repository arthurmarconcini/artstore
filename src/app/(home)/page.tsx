import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import { prismaClient } from "@/lib/prisma";
import Banner from "./components/Banner";

async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <main className="flex flex-col items-center gap-7 py-7">
      <Banner
        src="/banner-home-01.png"
        alt="Até 55% de desconto apenas esté mês."
      />
      <Categories />
      <ProductList products={deals} title="Ofertas" />

      <Banner
        src="/banner-home-02.png"
        alt="Até 55% de desconto apenas esté mês."
      />
      <ProductList products={keyboards} title="Teclados" />
      <Banner
        src="/banner-home-03.png"
        alt="Até 55% de desconto apenas esté mês."
      />
      <ProductList products={mouses} title="Mouses" />
    </main>
  );
}

export default Home;
