export const FeatureCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div
      className="
      bg-white
      p-5 sm:p-6
      rounded-xl
      border border-(--color-border)
      shadow-sm
      hover:shadow-lg
      transition
      flex flex-col
      h-full
      min-h-55
      "
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-(--color-text-dark) text-base sm:text-lg">
        {title}
      </h3>

      <p className="text-sm text-(--color-text-light) mt-2 flex-1">
        {description}
      </p>
    </div>
  );
};