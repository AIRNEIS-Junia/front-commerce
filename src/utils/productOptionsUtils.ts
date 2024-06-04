export interface Combination {
  id: string;
  availableForSale: boolean;
  quantityAvailable?: number | null | undefined;
  price: any["price"] | undefined;
  title: string;
  size?: string;
  color?: string;
}

type Option = keyof Pick<Combination, "color" | "size">;

export function getAllCombinations(variants: any[]): any[] | undefined {
  return variants?.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    price: variant.price,
    title: variant.title,
    quantityAvailable: variant.quantityAvailable,
    ...variant.selectedOptions.reduce(
      (accumulator: any, option: { name: string; value: string }) => ({
        ...accumulator,
        [option.name.toLowerCase()]: decodeURIComponent(
          option.value.toLowerCase(),
        ),
      }),
      {},
    ),
  }));
}

export function getCombination(
  product: any,
  color: string | null,
  size: string | null,
) {
  const hasOnlyOneVariant = product.variants.length <= 1;

  const defaultColor =
    product.flatOptions?.["Color"]?.find(Boolean)?.toLowerCase() ?? undefined;
  const defaultSize =
    product.flatOptions?.["Size"]?.find(Boolean)?.toLowerCase() ?? undefined;

  return hasOnlyOneVariant
    ? product.variants.find(Boolean)
    : // @ts-ignore
      getAllCombinations(product.variants).find(
        (combination) =>
          combination.size === (size ?? defaultSize) &&
          combination.color === (color ?? defaultColor),
      );
}

export function hasValidOption(
  variants: any[] | null | undefined,
  optionName: Option,
  optionValue: string | null,
): boolean {
  // @ts-ignore
  const combinations = getAllCombinations(variants || [])
    .flatMap((combination) => combination?.[optionName])
    .filter(Boolean);

  return !optionValue || combinations.includes(optionValue);
}

export function removeOptionsFromUrl(pathname: string) {
  const sizePattern = /-size_([0-9a-zA-Z\s]+)/;
  const colorPattern = /-color_([0-9a-zA-Z\s]+)/;

  return decodeURIComponent(pathname)
    .replace(sizePattern, "")
    .replace(colorPattern, "");
}

export function getOptionsFromUrl(pathname: string) {
  const result: Record<Option, null | string> = {
    size: null,
    color: null,
  };

  const sizePattern = /-size_([0-9a-zA-Z\s]+)/;
  const colorPattern = /-color_([0-9a-zA-Z\s]+)/;

  const decodedPathname = decodeURIComponent(pathname);

  const sizeMatch = decodedPathname.match(sizePattern);
  const colorMatch = decodedPathname.match(colorPattern);

  if (sizeMatch) result.size = sizeMatch[1].toLowerCase();
  if (colorMatch) result.color = colorMatch[1].toLowerCase();

  return result;
}
