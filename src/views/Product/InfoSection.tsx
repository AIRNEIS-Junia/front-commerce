import AddToCartButton from '@/views/Product/AddToCartButton';
import { number, string } from 'yup';

interface InfoSectionProps {
  title: string,
  description: string,
  className?: string,
  slug: string,
  price: number,
  quantity: number,
  material: string
}

export function InfoSection({
                              title,
                              description,
                              className,
                              slug,
                              price,
                              quantity,
                              material,
                            }: InfoSectionProps) {
  return (
    <div className={className}>
      <div className="mb-6">
        <h1 className="mb-1 text-xl/6 tracking-[-1px] md:text-4xl">{title}</h1>
      </div>
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
      {description && (
        <div
          className="text-[17px] leading-tight tracking-normal text-neutral-500"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {material && (
        <p className="text-base font-semibold tracking-tight text-black md:text-lg">
          Material: {material}
        </p>
      )}
      {slug && (
        <AddToCartButton productSlug={slug} />
      )}
    </div>
  );
}
