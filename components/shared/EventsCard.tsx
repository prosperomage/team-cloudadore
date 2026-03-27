import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const EventCard = ({
  image,
  title,
  date,
  location,
  description,
}: {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}) => {
  return (
    <div
      className="
      bg-white
      rounded-xl
      border border-(--color-border)
      shadow-md
      hover:shadow-lg
      transition
      flex flex-col
      h-full
      "
    >
      <div className="relative w-full h-48 sm:h-52 md:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-base sm:text-lg text-(--color-text-dark)">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm mt-2 text-(--color-text-light)">
          <FaCalendarAlt />
          {date}
        </div>

        <div className="flex items-center gap-2 text-sm mt-1 text-(--color-text-light)">
          <FaMapMarkerAlt />
          {location}
        </div>

        <p className="text-sm mt-3 text-(--color-text-light) flex-1">
          {description}
        </p>

        <button className="mt-4 text-(--color-secondary-blue) font-medium hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  );
};
