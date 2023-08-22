import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductType } from "@/types/types";

const ReviewCard = ({ review }: { review: string }) => {
  return (
    <Card className="p-5">
      <CardHeader>
        <CardTitle>Usermame</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{review}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
