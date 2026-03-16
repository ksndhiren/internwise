import { cn } from "@/lib/utils";

interface BlobDecorationProps {
  color: "sky" | "coral";
  className?: string;
}

const BlobDecoration = ({ color, className }: BlobDecorationProps) => (
  <div
    className={cn(
      "absolute rounded-full blur-[100px] animate-blob opacity-10",
      color === "sky" ? "bg-sky" : "bg-coral",
      className
    )}
  />
);

export default BlobDecoration;
