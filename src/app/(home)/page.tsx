import Image from "next/image";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import { prismaClient } from "@/lib/prisma";

async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <main className="flex flex-col items-center">
      <Image
        src="/banner-home-01.png"
        alt="até 55% de desconto só este mês."
        width={0}
        height={0}
        className="my-5 h-full w-full px-5"
        sizes="100vh"
      />
      <Categories />
      <Offers deals={deals} />
    </main>
  );
}

export default Home;
