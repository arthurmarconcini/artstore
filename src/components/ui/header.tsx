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
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";

const Header: React.FC = () => {
  const handleLoginClick = async () => {
    await signIn();
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
            <div className="flex flex-col gap-4">
              <Button
                onClick={handleLoginClick}
                variant={"outline"}
                className="flex justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
              <Button variant={"outline"} className="flex justify-start gap-2">
                <HomeIcon size={16} />
                Início
              </Button>
              <Button variant={"outline"} className="flex justify-start gap-2">
                <PercentIcon size={16} />
                Ofertas
              </Button>
              <Button variant={"outline"} className="flex justify-start gap-2">
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
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
