import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div>
      {/* Testimonials Section */}
      <section
        id="Testimonials"
        className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to
                say about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <blockquote className="">
                  <p className="text-zinc-200">
                    SocialBoost transformed our social media presence. Our
                    engagement has increased by 300% and we&apos;re seeing real
                    business results. Their team is responsive, creative, and
                    truly understands our brand.
                  </p>
                </blockquote>
              </CardContent>
              <hr className="border-dashed" />

              <CardFooter className="mt-auto">
                <div className="flex items-center gap-4">
                  <Image
                    src="/test1.jpeg"
                    width={40}
                    height={40}
                    alt="Michael Chen"
                    className="rounded-full "
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-zinc-500">CEO, Bloom Boutique</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Testimonial 2 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <blockquote className="">
                  <p className="text-zinc-200">
                    The website SocialBoost built for us is not only beautiful
                    but also converts visitors into customers. Their social
                    media management has taken a huge burden off our team while
                    delivering better results than we ever achieved on our own.
                  </p>
                </blockquote>
              </CardContent>
              <hr className="border-dashed" />

              <CardFooter className="mt-auto">
                <div className="flex items-center gap-4">
                  <Image
                    src="/test2.jpeg"
                    width={40}
                    height={40}
                    alt="Michael Chen"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-zinc-500">
                      Founder, Tech Solutions Inc.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Testimonial 3 */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <blockquote className="">
                  <p className="text-zinc-200">
                    As a small business owner, I was skeptical about investing
                    in social media management. SocialBoost proved me wrong.
                    Their team has helped us reach new customers and grow our
                    business in ways I never thought possible.
                  </p>
                </blockquote>
              </CardContent>
              <hr className="border-dashed" />
              <CardFooter className="mt-auto">
                <div className="flex items-center gap-4">
                  <Image
                    src="/test3.jpeg"
                    width={40}
                    height={40}
                    alt="Michael Chen"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Jessica Martinez</p>
                    <p className="text-sm text-zinc-500">
                      Owner, Healthy Eats Cafe
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
