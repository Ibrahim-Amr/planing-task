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
    <Tabs defaultValue="rating" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="rating">Rating & Reviews</TabsTrigger>
        <TabsTrigger value="faq">FAQs</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <h1>details</h1>
      </TabsContent>
      <TabsContent value="rating">
        <Reviews setProduct={setProduct} />
        <div className="grid grid-cols-2 gap-5">
          {product.reviews?.map((review) => <ReviewCard review={review} />)}
        </div>
      </TabsContent>
      <TabsContent value="faq">
        <h1>faq</h1>
      </TabsContent>
    </Tabs>
  );
};

export default Taps;