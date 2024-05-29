import { ComparisonOperators, FilterBuilder } from "@/utils/filterBuilder";

interface MakeFilterProps {
  minPrice: number | null;
  maxPrice: number | null;
  categories: string[];
  productTypes: string[];
}

export function composeFilters(
  filter: FilterBuilder,
  parsedSearchParams: MakeFilterProps,
) {
  const filterConditions = [
    {
      predicate: parsedSearchParams.categories.length > 0,
      action: () =>
        filter
          .and()
          .group((sub) =>
            sub.in("category.name", parsedSearchParams.categories),
          ),
    },
    {
      predicate: parsedSearchParams.productTypes.length > 0,
      action: () =>
        filter
          .and()
          .group((sub) =>
            sub.in("productTypes.name", parsedSearchParams.productTypes),
          ),
    },
    {
      predicate:
        (parsedSearchParams.minPrice !== null &&
          parsedSearchParams.maxPrice === null) ||
        (parsedSearchParams.minPrice === null &&
          parsedSearchParams.maxPrice !== null) ||
        (parsedSearchParams.minPrice !== null &&
          parsedSearchParams.maxPrice !== null),
      action: () => {
        if (
          parsedSearchParams.minPrice !== null &&
          parsedSearchParams.maxPrice === null
        ) {
          filter
            .and()
            .where(
              "price",
              ComparisonOperators.GreaterThanOrEqual,
              parsedSearchParams.minPrice,
            );
        } else if (
          parsedSearchParams.minPrice === null &&
          parsedSearchParams.maxPrice !== null
        ) {
          filter
            .and()
            .where(
              "price",
              ComparisonOperators.LessThanOrEqual,
              parsedSearchParams.maxPrice,
            );
        } else if (
          parsedSearchParams.minPrice !== null &&
          parsedSearchParams.maxPrice !== null
        ) {
          filter
            .and()
            .where(
              "price",
              ComparisonOperators.GreaterThanOrEqual,
              parsedSearchParams.minPrice,
            )
            .and()
            .where(
              "price",
              ComparisonOperators.LessThanOrEqual,
              parsedSearchParams.maxPrice,
            );
        }
      },
    },
  ];

  filterConditions.forEach(({ predicate, action }) => predicate && action());

  return filter;
}
