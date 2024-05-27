import { ComparisonOperators, FilterBuilder } from "@/utils/filterBuilder";

interface MakeFilterProps {
  minPrice: number | null;
  maxPrice: number | null;
  categories: string[];
  vendors: string[];
  tags: string[];
  colors: string[];
  sizes: string[];
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
            sub.in("collections.title", parsedSearchParams.categories),
          ),
    },
    {
      predicate: parsedSearchParams.vendors.length > 0,
      action: () =>
        filter
          .and()
          .group((sub) => sub.in("vendor", parsedSearchParams.vendors)),
    },
    {
      predicate: parsedSearchParams.tags.length > 0,
      action: () =>
        filter.and().group((sub) => sub.in("tags", parsedSearchParams.tags)),
    },
    {
      predicate: parsedSearchParams.colors.length > 0,
      action: () =>
        filter
          .and()
          .group((sub) =>
            sub.in("flatOptions.Color", parsedSearchParams.colors),
          ),
    },
    {
      predicate: parsedSearchParams.sizes.length > 0,
      action: () =>
        filter
          .and()
          .group((sub) => sub.in("flatOptions.Size", parsedSearchParams.sizes)),
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
