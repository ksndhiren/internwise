import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ children, light, className }: SectionHeadingProps) => (
  <h2 className={cn(
    "font-display text-4xl lg:text-5xl font-bold",
    light ? "text-primary-foreground" : "text-navy",
    className
  )}>
    {children}
  </h2>
);

export default SectionHeading;
