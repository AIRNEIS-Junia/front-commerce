import { StarIcon } from "../../../../enterprise-commerce/apps/web/components/Icons/StarIcon";
import { cn } from "../../../../enterprise-commerce/apps/web/utils/cn";

export const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <StarIcon
          key={star}
          className={cn(
            "size-4",
            star <= rating
              ? "fill-yellow-400 stroke-yellow-500"
              : "stroke-yellow-500",
          )}
        />
      ))}
    </div>
  );
};
