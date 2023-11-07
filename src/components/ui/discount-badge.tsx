import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

function DiscountBadge({ children, className, ...props }: BadgeProps) {
  return (
    <Badge className={twMerge(className, "px-2 py-1")} {...props}>
      <ArrowDownIcon size={16} />
      {children}
    </Badge>
  );
}

export default DiscountBadge;
