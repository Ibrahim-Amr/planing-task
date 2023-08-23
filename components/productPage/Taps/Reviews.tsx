"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductType } from "@/types/types";
import { useParams } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  FormEvent,
} from "react";

const Reviews = ({
  setProduct,
}: {
  setProduct: Dispatch<SetStateAction<ProductType | undefined | any>>;
}) => {
  const [review, setReview] = useState<string>("");
  const { Id } = useParams();

  const AddReview = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setProduct((prevState: ProductType) => ({
          ...prevState,
          reviews: [...(prevState.reviews || []), review],
        }));
        setReview("");
      } catch (err) {
        console.log("error adding reviews", err);
      }
    },
    [Id],
  );

  return (
    <div className="py-5">
      <form
        className="flex items-center justify-between gap-x-5"
        onSubmit={AddReview}
      >
        <Input
          className="rounded-md border bg-white dark:border-white placeholder:dark:text-white"
          placeholder="Write a review"
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <Button
          type="submit"
          className="w-52 py-6 transition-all ease-in-out active:scale-95"
        >
          Add Review
        </Button>
      </form>
    </div>
  );
};

export default Reviews;
