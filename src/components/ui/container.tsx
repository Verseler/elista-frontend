import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: React.HTMLProps<HTMLElement>["className"];
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4", className)}>{children}</div>
  );
}
