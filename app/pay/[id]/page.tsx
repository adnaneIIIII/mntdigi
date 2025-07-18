"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Check, CheckCircle, Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getSingleProduct } from "@/services";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  type Product = {
    compareAtPrice: number;
    description: string;
    id: string;
    isFeatured: boolean;
    name: string;
    price: number;
    publishedAt: string;
    shortdescription: string;
    status: string;
    image: { url: string }[];
  };
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    fetchProduct();
  },[]);

  const fetchProduct = async () => {
    const res = (await getSingleProduct(params.id)) as Product[];
    setProduct(res);
    console.log(res);
  };

  const socialMediaFeatures = [
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
  ];

  let id: number = 0;

  if (params.id === "cma3zclf8igzf07jxehynv8d3") {
    id = 2;
  } else if (params.id === "cma3z9xwrc42h07lfsy8k3u61") {
    id = 1;
  } else if (params.id === "cma3z3deac15607lfqumu7ymp") {
    id = 0;
  }

  const handlePaypalApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      console.log("Transaction completed by " + details.payer.name.given_name);
      // You can add your logic here after successful payment
    });
  };

  const createPaypalOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: product[0]?.price.toString() || "0",
            currency_code: "USD",
          },
        },
      ],
    });
  };

  return (
    <>
      {/* <Header /> */}

      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href={"/"}>
              <Image
                src={"/Mntdigitals-b.png"}
                width={120}
                height={100}
                alt="mntdigitals"
                className="h-14 w-28 relative"
              />
            </Link>
            <div className="hidden sm:flex items-center space-x-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 ">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  Cart
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 ">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  Details
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 ">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  Checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-slate-50">
        <div className="text-5xl font-bold  text-center bg-gray-50 tracking-wider">
          CheckOut
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-50 items-center flex rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className=" rounded-lg shadow-sm p-6 transition-all">
                <div className="text-5xl font-bold text-black/80 py-14  tracking-wider">
                  CheckOut
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                  Details
                </h1>
                <div className="paypal">
                  <PayPalScriptProvider
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
                      components: "buttons",
                      intent: "capture",

                      //   disableFunding: "card",
                    }}
                  >
                    <PayPalButtons
                      createOrder={createPaypalOrder}
                      onApprove={handlePaypalApprove}
                      style={{ layout: "vertical" }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 mt-14 border-0">
              <Card className="mb-2 bg-slate-50 border-0">
                <CardContent className="pt-4">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900">
                    Order Summary
                  </h2>
                  <div className="lg:col-span-5">
                    <div className="space-y-6">
                      {/* What You Get */}

                      <div className="space-y-4">
                        {/* Product preview */}
                        <div className="flex items-center gap-4 border-b border-black/10 pb-4">
                          <div className="flex-grow">
                            <h3 className="text-sm font-medium text-gray-900">
                              {product[0]?.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Modern Design
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                              ${product[0]?.price}
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-medium text-gray-900">
                              ${product[0]?.price}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Compare Price</span>
                            <span className="font-medium text-red-400 line-through">
                              ${product[0]?.compareAtPrice}
                            </span>
                          </div>
                          <div className="flex justify-between border-t border-black/10 pt-2 mt-2">
                            <span className="font-medium text-gray-900">
                              Total
                            </span>
                            <span className="font-bold text-gray-900">
                              ${product[0]?.price}
                            </span>
                          </div>
                        </div>

                        {/* <div className="flex justify-start gap-3 mt-4">
                      <Button>
                        <Link href={"/admin/products"}>Buy Now</Link>
                      </Button>
                    </div> */}

                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                          <Lock className="h-4 w-4" />
                          <span>Secure Checkout - SSL Encrypted</span>
                        </div>

                        <p className="text-xs text-gray-500 text-center">
                          Ensuring your financial and personal details are
                          secure during every transaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
