import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="bg-black">
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full  py-12 md:py-24 lg:py-32 bg-card flex justify-center text-white"
      >
        <div className="container  px-4 md:px-6">
          <div className="grid gap-6  lg:grid-cols-2 lg:gap-12">
            <div className="flex  flex-col justify-center space-y-4">
              <div className="space-y-2 ">
                <h2 className="text-3xl  font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to elevate your social media presence? Contact us today
                  to discuss how we can help your business grow.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 " />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="">
                     1412 Broadway 21st Floor, New York, NY 10018, United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 " />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="">support@mntdigitals.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 " />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="">+1 (782) 222-1472</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-zinc-800  p-6 shadow-lg">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none"
                    >
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className=" border-zinc-900 text-white "
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none"
                    >
                      Last name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className=" border-zinc-900 text-white "
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="border-zinc-900 text-white "
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    className="border-zinc-900 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px] border-zinc-900 text-white"
                  />
                </div>
                <Button className="w-full bg-white border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
