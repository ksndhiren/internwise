import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("max-w-7xl mx-auto px-6 lg:px-8", className)}>
    {children}
  </div>
);

export default Container;
