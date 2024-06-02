"use client";

import { Button } from "src/components/UI/Button/Button";
import { useModalStore } from "src/stores/modalStore";
import { useQueryState } from "nuqs";

type ReviewButtonProps = {
  productId: string;
};

export const ReviewButton = ({ productId }: ReviewButtonProps) => {
  const open = useModalStore((s) => s.openModal);
  const [_, setPid] = useQueryState("pid");

  return (
    <Button
      onClick={() => {
        setPid(productId);
        //open("review");
      }}
    >
      Leave a Review
    </Button>
  );
};
