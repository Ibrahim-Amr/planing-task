import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/product/${product?.id}`}
      className="group block w-full overflow-hidden p-2"
    >
      <Card className="overflow-hidden transition-all ease-in-out hover:shadow-lg xl:min-w-[350px]">
        <CardHeader>
          <div className="relative h-[250px] overflow-hidden border-b">
            <Image
              src={product?.images[0] || ""}
              fill
              alt="shirt"
              className="object-contain transition-all duration-300 ease-out group-hover:scale-105"
              sizes="350"
              priority={true}
              // placeholder="blur"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-center space-y-2 p-3">
          <p className="truncate text-xl font-bold ">{product?.title}</p>
          <div className="flex items-center justify-between gap-x-5">
            <div className="flex items-center justify-start gap-1 text-orange-300">
              {Array.from(
                { length: Math.round(product?.rating || 1) },
                (_, index) => (
                  <AiFillStar size={20} key={index} />
                ),
              )}
            </div>
            <p>{product?.rating.toFixed()}/5</p>
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
