import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const ProductsSkeleton = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Card className="min-w-[350px] overflow-hidden">
        <CardHeader>
          <Skeleton className="h-[300px] w-full" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsSkeleton;
