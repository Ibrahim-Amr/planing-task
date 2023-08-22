"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductType } from "@/types/types";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

const Reviews = ({
  setProduct,
}: {
  setProduct: Dispatch<SetStateAction<ProductType | undefined | any>>;
}) => {
  const [review, setReview] = useState<string>("");

  const AddReview = useCallback(() => {
    try {
      if (review !== "") {
        setProduct((prevState: ProductType) => ({
          ...prevState,
          reviews: [...(prevState.reviews || []), review],
        }));
        setReview("");
      }
    } catch (err) {
      console.log("error adding reviews", err);
    }
  }, [review]);

  return (
    <div className="px-2 py-5">
      <form
        className="flex items-center justify-between gap-x-5"
        onSubmit={AddReview}
      >
        <Input
          className="rounded-md border "
          placeholder="Write a review"
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <Button
          onClick={AddReview}
          className="w-52 transition-all ease-in-out active:scale-95"
        >
          Add Review
        </Button>
      </form>
    </div>
  );
};

export default Reviews;
