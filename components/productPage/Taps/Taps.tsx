import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductType } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import Reviews from "./Reviews";
import ReviewCard from "./ReviewCard";

const Taps = ({
  product,
  setProduct,
}: {
  product: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType | undefined>>;
}) => {
  return (
    <Tabs defaultValue="rating" className="w-full px-2 py-5">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="rating">Rating & Reviews</TabsTrigger>
        <TabsTrigger value="faq">FAQs</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <div className="flex w-full items-center justify-center py-5 text-2xl font-medium capitalize">
          <p>No details available</p>
        </div>
      </TabsContent>
      <TabsContent value="rating">
        <Reviews setProduct={setProduct} />
        <div className="grid gap-5 lg:grid-cols-2">
          {product.reviews?.map((review) => (
            <ReviewCard key={review} review={review} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="faq">
        <div className="flex w-full items-center justify-center py-5 text-2xl font-medium capitalize">
          <p>No FAQs available</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Taps;
