import { StarRating } from "./StarRating";
import AddToCartButton from '@/views/Product/AddToCartButton';

interface InfoSectionProps {
  title: string;
  description: string;
  className?: string;
  slug: string;
  price: number;
  quantity: number;
}

export function InfoSection({
  title,
  description,
  className,
  slug,
  price,
  quantity
}: InfoSectionProps) {
  return (
    <div className={className}>
      <div className="mb-6">
        <h1 className="mb-1 text-xl/6 tracking-[-1px] md:text-4xl">{title}</h1>
      </div>
      {description && (
        <div
          className="text-[17px] leading-tight tracking-normal text-neutral-500"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {slug && (
        <AddToCartButton productSlug={slug}/>
    )}

      {price && (
        <p className="text-base font-semibold tracking-tight text-black md:text-lg">
          {price} €
        </p>
      )}

      {quantity && (
        <p className="text-base font-semibold tracking-tight text-black md:text-lg">
          {quantity} in stock
        </p>
      )}




    </div>
  );
}
