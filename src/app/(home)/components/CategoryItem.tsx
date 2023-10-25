import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  PlaneIcon,
  SpeakerIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const icons = {
    keyboards: <KeyboardIcon size={16} />,
    mouses: <MouseIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mousepads: <PlaneIcon size={16} />,
  };

  return (
    <Badge
      variant={"outline"}
      className="flex w-full justify-center gap-2 py-3 font-bold"
    >
      {icons[category.slug as keyof typeof icons]}
      <span className="text-xs">{category.name}</span>
    </Badge>
  );
}

export default CategoryItem;
