import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing(props: any) {
  const features = [
    [
      "3 social media platforms",
      "12 posts per month",
      "Basic content creation",
      "Monthly performance report",
      "Email support",
    ],
    [
      "All social media platforms",
      "30 posts per month",
      "Premium content creation",
      "Weekly performance reports",
      "Full community management",
      "Complete website management",
      "Social media advertising",
      "24/7 VIP support",
    ],
    ["Everything in Pro Plan", "5GB Cloud Storage", "Email and Chat Support"],
    ["Everything in Pro Plan"],
  ];
  const underprice: string[] = [
    "Perfect for small businesses just getting started with social media.",
    "Comprehensive solution for established businesses seeking maximum impact.",
    "Ideal for businesses looking to expand their online presence.",
    "Ideal for businesses looking to expand their online presence.",
  ];
  const planNames = ["Starter", "Pro", "Enterprise", "Get started"]; // Added plan names
  return (
    <section className="py-16 mx-4 sm:mx-4 md:py-32" id="Pricing">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Select the package that best fits your business needs and goals. All
            plans include dedicated support.
          </p>
        </div>

        <div className="mt-8 px-4 grid gap-6 md:mt-20 md:grid-cols-3">
          {props.product.map((item: any, index: number) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="font-medium">
                  {planNames[index]}
                </CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  {item?.price}$
                </span>
                <CardDescription className="text-sm">
                  {underprice[index]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="space-y-2">
                  {features[index].map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href={`/checkout/${item?.id}`}>Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
