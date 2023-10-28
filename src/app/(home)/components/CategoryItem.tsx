import { Badge } from "@/components/ui/badge";
import { CATEGORIES_ICONS } from "@/constants/CategoryIcons";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Badge
      variant={"outline"}
      className="flex w-full justify-center gap-2 py-3 font-bold"
    >
      {CATEGORIES_ICONS[category.slug as keyof typeof CATEGORIES_ICONS]}
      <span className="text-xs">{category.name}</span>
    </Badge>
  );
}

export default CategoryItem;
