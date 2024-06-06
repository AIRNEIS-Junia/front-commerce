"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/DropdownMenu/DropdownMenu";
import { ChevronIcon } from "@/components/UI/Icons/ChevronIcon";
import { parseAsStringEnum, useQueryState } from "nuqs";

export enum Sorting {
  PRICE_DESC = "price:desc",
  PRICE_ASC = "price:asc",
  DATE_ASC = "updatedAt:asc",
  DATE_DESC = "updatedAt:desc",
  RELEVANCY = "",
}

const LABELS = {
  [Sorting.PRICE_DESC]: "Prix : Du plus élevé au plus bas",
  [Sorting.PRICE_ASC]: "Prix : Du plus bas au plus élevé",
  [Sorting.DATE_DESC]: "Les plus récents",
  [Sorting.DATE_ASC]: "Les plus anciens",
  [Sorting.RELEVANCY]: "Pertinence",
};

interface SorterProps {
  className?: string;
}

export function Sorter({ className }: SorterProps) {
  const [sortBy, setSortBy] = useQueryState("sortBy", {
    ...parseAsStringEnum<Sorting>(Object.values(Sorting)).withDefault(
      Sorting.RELEVANCY,
    ),
    shallow: false,
    history: "push",
  });

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger aria-expanded={undefined} asChild>
          <div className="flex cursor-pointer flex-wrap items-center justify-center gap-0.5 text-[15px] text-black">
            Trier par:{" "}
            <span className="ml-0.5 text-slate-700 underline">
              {LABELS[sortBy]}
            </span>
            <ChevronIcon />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[240px] rounded-b-md bg-white px-0 text-neutral-500 shadow-lg"
          align="end"
        >
          {Object.entries(LABELS).map(([key, label]) => (
            <DropdownMenuItem
              key={label}
              className="cursor-pointer border-b border-neutral-200 py-2 last:border-b-0 hover:bg-neutral-50 focus:bg-neutral-50 active:bg-neutral-50"
              onClick={() => setSortBy(key as Sorting)}
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
