"use client";

import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const Header: React.FC = () => {
  const { data, status } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card isHeader>
      <CardContent className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="flex flex-col gap-4">
            <SheetHeader className="text-md text-left font-bold">
              Menu
            </SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-4 py-2">
                  <Avatar>
                    {data.user.image && <AvatarImage src={data.user.image} />}
                    <AvatarFallback>
                      {data.user.name?.[0].toLocaleUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-medium">{data.user.name}</h1>
                    <h2 className="text-sm opacity-75">Boas compras!</h2>
                  </div>
                </div>
                <Separator />
              </div>
            )}

            <div className="flex flex-col gap-4">
              {status === "authenticated" ? (
                <Button
                  onClick={handleLogoutClick}
                  variant={"outline"}
                  className="flex justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer Logout
                </Button>
              ) : (
                <Button
                  onClick={handleLoginClick}
                  variant={"outline"}
                  className="flex justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              )}

              <Button variant={"outline"} className="flex justify-start gap-2">
                <HomeIcon size={16} />
                Início
              </Button>
              <Button variant={"outline"} className="flex justify-start gap-2">
                <PercentIcon size={16} />
                Ofertas
              </Button>

              <SheetClose asChild>
                <Link href="/categories">
                  <Button
                    variant={"outline"}
                    className="flex w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-medium">
          <span className="font-bold text-primary">ART </span>
          Store
        </h1>
        <Button variant={"outline"}>
          <ShoppingCartIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
