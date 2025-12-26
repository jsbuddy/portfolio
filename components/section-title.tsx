import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  subtitle,
  className,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}) => {
  if (subtitle) {
    return (
      <div className={cn("mb-6 sm:mb-8 px-1", className)}>
        <h2 className="font-semibold text-xl leading-tight tracking-tighter">
          {title}
        </h2>
        <p className="text-foreground/60 leading-tight mt-1">{subtitle}</p>
      </div>
    );
  }

  return (
    <h2
      className={cn(
        `font-semibold text-xl mb-6 sm:mb-8 px-1 tracking-tighter`,
        className,
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
