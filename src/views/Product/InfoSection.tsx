import AddToCartButton from '@/views/Product/AddToCartButton';
import { ProductType } from '@/types/ProductType';

interface InfoSectionProps {
  title: string,
  description: string,
  className?: string,
  slug: string,
  price: number,
  quantity: number,
  productTypes: ProductType[],
}

export function InfoSection({
                              title,
                              description,
                              className,
                              slug,
                              price,
                              quantity,
                              productTypes,
                            }: InfoSectionProps) {
  // @ts-ignore
  return (
    <div className={className}>
      <div className="mb-6">
        <h1 className="mb-1 text-xl/6 tracking-[-1px] md:text-4xl">{title}</h1>
      </div>
      {price && (
        <p className="mb-2 text-base font-semibold tracking-tight text-black md:text-lg">
          {price} €
        </p>
      )}
      {quantity && (
        <p className="mb-2 text-base font-semibold tracking-tight text-black md:text-lg">
          {quantity} in stock
        </p>
      )}
      {description && (
        <div
          className="mb-4 text-[17px] leading-tight tracking-normal text-neutral-500"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {productTypes && (
        <p className="mb-2 text-base font-semibold tracking-tight text-black md:text-lg">
          Material(s): {productTypes.map((productType) => productType.name).join(', ')}
        </p>
      )}
      {slug && (
        <div className="mt-4">
          <AddToCartButton productSlug={slug} />
        </div>
      )}
    </div>
  );
}
