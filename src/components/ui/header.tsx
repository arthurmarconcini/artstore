import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

const Header: React.FC = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-[1.875rem]">
        <Button variant={"outline"}>
          <MenuIcon />
        </Button>
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
