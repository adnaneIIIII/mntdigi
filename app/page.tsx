"use client";
import Contact from "@/components/_home/contact";
import Features from "@/components/_home/features-3";
import FooterSection from "@/components/_home/footer";
import HeroSection from "@/components/_home/hero-section";
import PortfolioSection from "@/components/_home/portfolio";
import Pricing from "@/components/_home/pricing";
import Testimonials from "@/components/_home/testimonials";
import { bannerSection } from "@/services";
import { useEffect, useState } from "react";

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
  images: { url: string }[];
};

type GetProductResponse = {
  product: Product[];
};
export default function Page() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = (await bannerSection()) as GetProductResponse;
    setProduct(res.product);
    console.log(res.product);
  };
  return (
    <>
      <HeroSection />
      <Features />
      <PortfolioSection />
      <Pricing product={product} />
      <Testimonials />
      <Contact />
      <FooterSection />
    </>
  );
}
