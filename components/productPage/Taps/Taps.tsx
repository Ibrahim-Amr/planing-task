import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Taps = () => {
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
        <h1>rating</h1>
      </TabsContent>
      <TabsContent value="faq">
        <h1>faq</h1>
      </TabsContent>
    </Tabs>
  );
};

export default Taps;
