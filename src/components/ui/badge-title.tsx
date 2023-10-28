import { Badge } from "./badge";

interface BadgeTitleProps {
  children: React.ReactNode;
  title: string;
}

function BadgeTitle({ children, title }: BadgeTitleProps) {
  return (
    <Badge
      variant="outline"
      className="gap-1 border-2 border-primary px-3 py-1"
    >
      {children}
      <p className="text-base font-bold uppercase">{title}</p>
    </Badge>
  );
}

export default BadgeTitle;
