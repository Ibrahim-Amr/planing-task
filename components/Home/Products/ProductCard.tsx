import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({ product }: { product?: ProductType }) => {
  return (
    <Link href={`/product/${product?.id}`}>
      <Card className="min-w-[300px] max-w-[300px] overflow-hidden">
        <CardHeader>
          <div className="h-[400px]">
            <Image
              src={product?.image ? product?.image : ""}
              width={260}
              height={300}
              alt="shirt"
              className="h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-center space-y-2 p-3">
          <p className="text-lg font-bold ">{product?.title}</p>
          <div className="flex items-center justify-between gap-x-5">
            <div className="flex items-center justify-start gap-1 text-orange-300">
              {Array.from(
                { length: Math.round(product?.rating.rate || 1) },
                () => 0,
              )
                .slice(0, 9)
                .map((n) => (
                  <AiFillStar key={n} />
                ))}
            </div>
            <p>{Math.round(product?.rating.rate || 1)}</p>
          </div>
          <p className="text-xl font-bold">${product?.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
