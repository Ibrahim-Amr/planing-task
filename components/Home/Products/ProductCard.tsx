import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link href={`/product/${product?.id}`} className="block w-full p-2">
      <Card className="min-w-[350px] overflow-hidden">
        <CardHeader>
          <div className="h-[400px] border-b">
            <Image
              src={product?.images[0] || ""}
              width={300}
              height={300}
              alt="shirt"
              className="h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-center space-y-2 p-3">
          <p className="text-xl font-bold">{product?.title}</p>
          <div className="flex items-center justify-between gap-x-5">
            <div className="flex items-center justify-start gap-1 text-orange-300">
              {Array.from({ length: Math.round(product?.rating || 1) }, () => 0)
                .slice(0, 9)
                .map((n) => (
                  <AiFillStar size={20} key={n} />
                ))}
            </div>
            <p>{product?.rating.toFixed(1)}/5</p>
          </div>
          <p className="space-x-2 text-2xl font-bold">
            <span> ${product?.price}</span>
            <span className="text-neutral-400 line-through">
              ${product.discountPercentage}
            </span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
